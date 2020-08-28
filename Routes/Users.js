const express = require('express')
const route = express.Router();
const { verifyToken } = require('../Helpers/token')

const {
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    login
} = require('../Controllers/Users')

route.get('/users', getAllUser)
route.post('/users', addUser)
route.patch('/users/:id', verifyToken, updateUser)
route.delete('/users/:id', verifyToken, deleteUser)
route.post('/users/login', login)

module.exports = route