const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    id_product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    id_cart: {
        type: Schema.Types.ObjectId,
        ref: 'carts'
    },
    status: {
        type: Boolean,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const Transactions = mongoose.model('transactions', TransactionSchema)

module.exports = Transactions