const mongo = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongo.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log(`****** Connect DB success ******`)
        } else {
            console.log(`****** Connect DB fail ******`)
        }
    });
};

module.exports = dbConnect;