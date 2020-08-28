const mongoose = require('mongoose')

const url= process.env.DB_URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;

module.exports = db;