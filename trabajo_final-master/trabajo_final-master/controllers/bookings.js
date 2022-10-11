const { bookingsModel } = require('../models')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const createBooking = async (req, res) => {
    try {
        req = matchedData(req)
        const { body } = req
        const booking = {
            nombre: body.nombre.toUpperCase(),
            cedula: body.cedula,
            correo: body.correo.toUpperCase(),
            telefono: body.telefono,
            tarjeta: body.tarjeta,
            ccv: body.ccv,
            cuotas: body.cuotas,
            total: body.total,
            ida: body.ida,
            regreso: body.regreso,
            salida: body.salida,
            llegada: body.llegada,
            adultos: body.adultos,
            ninos: body.ninos
        }
        const data = await bookingsModel.create(booking)
        res.send(data)
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_CREAR_RESERVA")
    }
}

const getBookings = async (req, res) => {
    try {
        const booking = req.booking
        const data = await bookingsModel.find({})
        res.send({ data, booking })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_LAS_RESERVAS")
    }
}

const getBooking = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await bookingsModel.findById(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_LA_RESERVA")
    }
}

module.exports = { createBooking, getBookings, getBooking }