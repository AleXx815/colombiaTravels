const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateUser = [
    check("nombre")
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 5, max: 50 }),
    check("fecha_nacimiento")
        .notEmpty(),
    check("genero")
        .exists()
        .notEmpty()
        .isString(),
    check("usuario")
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 10 }),
    check("correo")
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 8, max: 20 }),
    check("rol")
        .exists()
        .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetUser = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLoginUser = [
    check("usuario")
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 10 }),
    check("password")
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 8, max: 20 }),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateUser, validatorGetUser, validatorLoginUser }