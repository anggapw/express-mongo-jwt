const route = require('express').Router()
// const { verifyToken } = require('../Helpers/token')
const { jwtAuthenticate } = require('../Helpers/auth');

const {
    getAllUser,
    addUser,
    login,
    updateUser,
    deleteUser
} = require('../Controllers/Users')

route.get('/users', getAllUser)
route.post('/users', addUser)
route.post('/users/login', login)
route.patch('/users/:id', jwtAuthenticate, updateUser)
route.delete('/users/:id', deleteUser)

module.exports = route