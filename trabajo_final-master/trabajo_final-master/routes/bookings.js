const express = require('express');
const { createBooking, getBookings, getBooking } = require('../controllers/bookings');
const { validatorCreateBookings, validatorGetBookings } = require('../validators/bookings')
const { authMiddleware, checkRol } = require('../middleware/session');
const router = express.Router();

router.post('/', validatorCreateBookings, createBooking)
router.get('/', authMiddleware, checkRol(["admin", "user"]), getBookings)
router.get('/:id', validatorGetBookings, authMiddleware, checkRol(["admin", "user"]), getBooking)


module.exports = router