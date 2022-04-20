const bodyParser = require('body-parser')
const express = require('express')
const { login } = require('../account-modules/login');
const { register } = require('../account-modules/register');

var router = express.Router();

router.get('/', (req, res) => {
    res.send('success / account /')
})

router.post('/register', (req, res) => {
    register().then(data => {
        res.send(data)
    }).catch(e => {
        res.send(e)
    })
})

router.post('/login', (req, res) => {
    console.log('/login');
    login(req.body).then(data => {
        res.send(data)
    })
})


module.exports = router;