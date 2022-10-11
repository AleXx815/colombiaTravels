const { usersModel } = require('../models')
const { matchedData } = require('express-validator')
const { encrypt, macht } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt')
const { handleHttpError } = require('../utils/handleError')
const fs = require('fs')
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

const createUser = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await usersModel.create(body)
        dataUser.set('password', undefined, { strict: false })

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({ data })
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_AL_REGISTRAR_EL_USUARIO")
    }
}

const getUsers = async (req, res) => {
    try {
        const user = req.user
        const data = await usersModel.find({})
        res.send({ data, user })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_LA_LISTA_DE_USUARIOS")
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await usersModel.findById(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_AL_OBTENER_UN_USUARIO")
    }
}

const updateUser = async (req, res) => {
    try {
        const { body } = req
        const { id } = matchedData(req)
        const user = {
            nombre: body.nombre.toUpperCase(),
            fecha_nacimiento: body.fecha_nacimiento,
            genero: body.genero,
            usuario: body.usuario.toUpperCase(),
            correo: body.correo.toUpperCase(),
            password: body.password,
            rol: body.rol
        }
        const data = await usersModel.findByIdAndUpdate(
            id, user
        )
        res.send(data)
    } catch (e) {
        handleHttpError(res, "ERROR_AL_EDITAR_UN_USUARIO")
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const dataImg = await usersModel.findById(id)
        const { img } = dataImg
        const filePath = `${MEDIA_PATH}/${img}`
        if (filePath.split("/").pop() === 'undefined') {
            console.log('El usuario no tiene imagen')
        } else {
            fs.unlinkSync(filePath)
            console.log('Imagen de usuario eliminada')
        }

        const data = await usersModel.deleteOne({ _id: id })
        res.send(data)
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_AL_ELIMINAR_EL_USUARIO")
    }
}

const loginCtr = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await usersModel.findOne({ usuario: req.usuario })
        if (!user) {
            handleHttpError(res, "USUARIO_NO_EXISTE", 404)
            return
        }

        const hashPassword = user.password
        const check = await macht(req.password, hashPassword)

        if (!check) {
            handleHttpError(res, "EL_USUARIO_O_LA_CONTRASEÑA_NO_SON_VALIDOS", 401)
            return
        }

        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({ data })
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_AL_VERIFICAR_EL_USUARIO")
    }
}

const addImgUser = async (req, res) => {        
    try {
        const { body, file } = req
        const { id } = matchedData(req)
        const user = {
            url: `${PUBLIC_URL}/${file.filename}`,
            img: file.filename
        }
        const data = await usersModel.findByIdAndUpdate(id, user)
        res.send(data)
    } catch (e) {
        handleHttpError(res, "ERROR_AL_CREAR_UN_USUARIO")
    }
}

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser, loginCtr, addImgUser }