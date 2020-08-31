const express = require('express')
const route = express.Router();
const { verifyToken } = require('../Helpers/token')

const {
    getAllProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/Products')

route.get('/products', getAllProduct)
route.get('/products/:id', getOneProduct)
route.post('/products', verifyToken, addProduct)
route.patch('/products/:id', verifyToken, updateProduct)
route.delete('/products/:id', verifyToken, deleteProduct)

module.exports = route