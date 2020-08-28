const express = require('express')
const route = express.Router();

const {
    getAllProductImage,
    addProductImage,
    updateProductImage,
    deleteProductImage
} = require('../Controllers/Product_Images')

route.get('/product_images', getAllProductImage)
route.post('/product_images', addProductImage)
route.patch('/products/:id', updateProductImage)
route.delete('/products/:id', deleteProductImage)

module.exports = route