const { messagesModel } = require('../models')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const createMessage = async (req, res) => {
    try {
        req = matchedData(req)
        const { body } = req
        const message = {
            nombre: body.nombre.toUpperCase(),
            correo: body.correo.toUpperCase(),
            mensaje: body.mensaje,
        }
        const data = await messagesModel.create(message)
        res.send(data)
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_AL_ENVIAR_MENSAJE")
    }
}

const getMessages = async (req, res) => {
    try {
        const message = req.message
        const data = await messagesModel.find({})
        res.send({ data, message })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_LA_LISTA_DE_MENSAJES")
    }
}

const getMessage = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await messagesModel.findById(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_EL_MENSAJE")
    }
}

module.exports = { createMessage, getMessages, getMessage }