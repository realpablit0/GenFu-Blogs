const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.use(`/chatroom`, require('./routes/chatroom-route'))

app.get('*', (req, res) => {

    res.json({ 'success interactions server': true, 'error': null })
})

module.exports = app;