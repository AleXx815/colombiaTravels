const mongo = require('mongoose')

const UserScheme = new mongo.Schema(
    {
        nombre: {
            type: String
        },
        fecha_nacimiento: {
            type: Date
        },
        genero: {
            type: ["femenino", "masculino", "indefinido"],
            default: "masculino"
        },
        usuario: {
            type: String,
            unique: true
        },
        correo: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        rol: {
            type: ["admin", "user", "ventas"],
            default: "user"
        },
        url: {
            type: String
        },
        img: {
            type: String
        }
    }, {
    timestamps: true,
    versionKey: false
}
);

module.exports = mongo.model("users", UserScheme)