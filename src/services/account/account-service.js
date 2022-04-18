const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { login } = require('./modules/login');
const { register } = require('./modules/register');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.send('success / account /')
})

app.post('/register', (req, res) => {
    register().then(data => {
        res.send(data)
    }).catch(e => {
        res.send(e)
    })
})

/* 
    login form:
    username, password

*/

app.post('/login', (req, res) => {
    console.log('/login');
    login(req.body).then(data => {
        res.send(data)
    })
})

module.exports = app;