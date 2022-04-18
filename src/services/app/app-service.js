const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname.split('service')[0], 'public/index.html'))
})

module.exports = app;