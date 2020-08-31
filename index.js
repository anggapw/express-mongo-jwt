const express = require('express');
const app = express()
const passport = require('passport')
const db = require('./Config/db');
const bodyParser = require('body-parser')
const cors = require('cors');

require('dotenv').config()
const PORT = process.env.PORT || 3000;

const userRouter = require('./Routes/Users')
const productRouter = require('./Routes/Products')
const productImageRouter = require('./Routes/Product_Images')
const cartRouter = require('./Routes/Carts')
const transactionRouter = require('./Routes/Transactions')

require('./Config/strategies').strategies()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.use('/', userRouter)
app.use('/', productRouter)
app.use('/', productImageRouter)
app.use('/', cartRouter)
app.use('/', transactionRouter)

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// FACEBOOK AUTHENTICATE
// app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

//GOOGLE AUTHENTICATE
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });
// END OF GOOGLE AUTHENTICATE

db.on('error', console.error.bind(console, 'database connection error'));
db.once('open', () => console.log('database connected'));

app.listen(PORT, () => console.log("Server is running..."));