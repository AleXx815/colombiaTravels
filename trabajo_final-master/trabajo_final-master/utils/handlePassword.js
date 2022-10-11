const bcryptjs = require('bcryptjs')

const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 8)
    return hash
}

const macht = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, macht }