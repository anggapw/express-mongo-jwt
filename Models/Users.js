const mongoose = require('mongoose')
const findOrCreate = require('mongoose-findorcreate');

const Schema = mongoose.Schema

const userSchema = new Schema({
    providerId: {
        type: String,
        require: false
    },
    provider: {
        type: String,
        require: false
    },
    fullName: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

userSchema.plugin(findOrCreate);

const Users = mongoose.model('users', userSchema)

module.exports = Users