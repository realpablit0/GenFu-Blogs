const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { login } = require('./modules/login');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.post('/register', (req, res) => {
    res.send('login!! success')
})

/* 
    login form:
    username, password

*/

app.post('/login', (req, res) => {
    login()
})

module.exports = app;