const { handleHttpError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJwt')
const { usersModel } = require('../models')

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "INICIE_SESIÓN", 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const user = await usersModel.findById(dataToken._id)
        req.user = user

        next()
    } catch (e) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

const checkRol = (rol) => (req, res, next) => {
    try {
        const { user } = req
        const rolByUser = user.rol
        const checkValueRol = rol.some((rolSingle) => rolByUser.includes(rolSingle))
        if(!checkValueRol){
            handleHttpError(res, "EL_USUARIO_NO_TIENE_PERMISOS", 403)
            return
        }
        next()
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_DE_PERMISOS", 403)
    }
}

module.exports = { authMiddleware, checkRol }