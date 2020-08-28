const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'product_images'
    }
},{
    timestamps: true
})

const Products = mongoose.model('products', productSchema)

module.exports = Products