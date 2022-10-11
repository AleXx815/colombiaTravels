const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateMessage = [
    check("nombre")
        .notEmpty()
        .isString()
        .isLength({ min: 5, max: 50 }),
    check("correo")
        .notEmpty()
        .isEmail(),
    check("mensaje")
        .notEmpty()
        .isString()
        .isLength({ min: 8, max: 500 }),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetMessage = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateMessage, validatorGetMessage }