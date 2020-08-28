const express = require('express');
const db = require('./Config/db');
const bodyParser = require('body-parser')

const userRouter = require('./Routes/Users')
const productRouter = require('./Routes/Products')
const productImageRouter = require('./Routes/Product_Images')
const cartRouter = require('./Routes/Carts')
const transactionRouter = require('./Routes/Transactions')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', productRouter)
app.use('/', productImageRouter)
app.use('/', cartRouter)
app.use('/', transactionRouter)

db.on('error', console.error.bind(console, 'database connection error'));
db.once('open', () => console.log('database connected'));

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));