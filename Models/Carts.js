const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CartSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    id_product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    quantity:{
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
},{
    timestamps: true
})

const Carts = mongoose.model('carts', CartSchema)

module.exports = Carts