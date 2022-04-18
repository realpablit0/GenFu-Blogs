const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.get('*', (req, res) => {

    res.json({ 'success business server': true, 'error': null })
})

module.exports = app;