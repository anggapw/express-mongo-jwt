const express = require('express')
const route = express.Router();
const { verifyToken } = require('../Helpers/token')

const {
    getAllTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
} = require('../Controllers/Transactions')

route.get('/transactions', verifyToken, getAllTransaction)
route.post('/transactions', verifyToken, addTransaction)
route.patch('/products/:id', verifyToken, updateTransaction)
route.delete('/products/:id', verifyToken, deleteTransaction)

module.exports = route