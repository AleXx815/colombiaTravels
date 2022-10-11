const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateBookings = [
    check("nombre")
        .notEmpty()
        .isString()
        .isLength({ min: 5, max: 50 }),
    check("cedula")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 4, max: 10 }),
    check("correo")
        .notEmpty()
        .isEmail(),
    check("telefono")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 10, max: 10 }),
    check("tarjeta")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 16, max: 16 }),
    check("ccv")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 3, max: 3 }),
    check("cuotas")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 1, max: 2 }),
    check("total")
        .notEmpty()
        .isNumeric(),
    check("ida")
        .notEmpty(),
    check("regreso")
        .notEmpty(),
    check("salida")
        .notEmpty()
        .isString(),
    check("llegada")
        .notEmpty()
        .isString(),
    check("adultos")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 1, max: 2 }),
    check("ninos")
        .notEmpty()
        .isNumeric()
        .isLength({ min: 1, max: 2 }),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetBookings = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateBookings, validatorGetBookings }