const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());


app.use(`/`, require('./routes/account-route'))
app.use(`/profile`, require('./routes/profile-route'))


module.exports = app;