const express = require('express');
const { createUser, getUsers, getUser, updateUser, deleteUser, loginCtr, addImgUser } = require('../controllers/users');
const { validatorCreateUser, validatorGetUser, validatorLoginUser } = require('../validators/users')
const { authMiddleware, checkRol } = require('../middleware/session');
const upload = require('../utils/handleImg');
const router = express.Router();

router.post('/register', validatorCreateUser, createUser)
router.post('/login', validatorLoginUser, loginCtr)
router.put('/addImg/:id', upload.single("myfile"), addImgUser)
router.get('/', authMiddleware, checkRol(["admin"]), getUsers)
router.get('/:id', authMiddleware, checkRol(["admin", "user"]), validatorGetUser, getUser)
router.put('/:id', authMiddleware, checkRol(["admin"]), validatorGetUser, validatorCreateUser, updateUser)
router.delete('/:id', authMiddleware, checkRol(["admin"]), validatorGetUser, deleteUser)


module.exports = router