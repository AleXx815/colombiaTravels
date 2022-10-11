const mongo = require('mongoose')

const MessageScheme = new mongo.Schema(
    {
        nombre: {
            type: String
        },
        correo: {
            type: String
        },
        mensaje: {
            type: String
        }
    }, {
    timestamps: true,
    versionKey: false
}
);

module.exports = mongo.model("messages", MessageScheme)