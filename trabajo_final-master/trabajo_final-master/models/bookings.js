const mongo = require('mongoose')

const BookingsScheme = new mongo.Schema(
    {
        nombre: {
            type: String
        },
        cedula: {
            type: Number
        },
        correo: {
            type: String
        },
        telefono: {
            type: Number
        },
        tarjeta: {
            type: Number
        },
        ccv: {
            type: Number
        },
        cuotas: {
            type: Number
        },
        total: {
            type: Number
        },
        ida: {
            type: Date
        },
        regreso: {
            type: Date
        },
        salida: {
            type: String
        },
        llegada: {
            type: String
        },
        adultos: {
            type: Number
        },
        ninos: {
            type: Number
        }
    }, {
    timestamps: true,
    versionKey: false
}
);

module.exports = mongo.model("bookings", BookingsScheme)