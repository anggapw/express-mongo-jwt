const express = require('express')
const route = express.Router();
const { verifyToken } = require('../Helpers/token')

const {
    getAllCart,
    addCart,
    updateCart,
    deleteCart
} = require('../Controllers/Carts')

route.get('/carts', verifyToken, getAllCart)
route.post('/carts', verifyToken, addCart)
route.patch('/products/:id', verifyToken, updateCart)
route.delete('/products/:id', verifyToken, deleteCart)

module.exports = route