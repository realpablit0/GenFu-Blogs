const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.all('*', checkRequest);
var requestNum = 0

function checkRequest(req, res, next) {
    // console.log(`request: ${requestNum++}`);
    next();
}

// public files
app.use(express.static(path.join(__dirname.split('broker')[0], '/public/')))

// api tag
var apiTag = require('../../resources/broker-config.json')['API-tag']
    /* activate routes */
    // app route 
app.use(`/app`, require('./routes/app-route'))

// accounts route 
app.use(`${apiTag}/account`, require('./routes/account-route'))

// analytics route
app.use(`${apiTag}/analytic`, require('./routes/analytic-route'))

// business route
app.use(`${apiTag}/business`, require('./routes/business-route'))

// content route
app.use(`${apiTag}/content`, require('./routes/content-route'))

// event route
app.use(`${apiTag}/event`, require('./routes/event-route'))

// interaction route
app.use(`${apiTag}/interaction`, require('./routes/interaction-route'))

app.use(`${apiTag}/app`, require('./routes/app-route'))

/* server start logs */
const { _Logging } = require('../logging/logging')
new _Logging({ 'type': 'info', 'message': 'server start Broker', 'file': 'broker-index.js', 'tags': ['server', 'restart'] })



module.exports = app;