const express = require('express');
const { createMessage, getMessages, getMessage } = require('../controllers/messages');
const { validatorCreateMessage, validatorGetMessage } = require('../validators/messages')
const { authMiddleware, checkRol } = require('../middleware/session');
const router = express.Router();

router.post('/', validatorCreateMessage, createMessage)
router.get('/', authMiddleware, checkRol(["admin"]), getMessages)
router.get('/:id', validatorGetMessage, authMiddleware, checkRol(["admin"]), getMessage)


module.exports = router