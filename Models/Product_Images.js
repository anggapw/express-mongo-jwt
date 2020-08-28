const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productImageSchema = new Schema({
    id_product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    url_image:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Product_Images = mongoose.model('product_images', productImageSchema)

module.exports = Product_Images