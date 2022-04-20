const bodyParser = require('body-parser')
const express = require('express')
const { ServiceRequest } = require('../ServiceRequest')
const appConfig = require('../../../resources/services-routing.json').app

var router = express.Router();
router.get('*', (req, res) => {
    return new ServiceRequest().send(req, { 'url': appConfig.url, 'port': appConfig.port }, 'GET').then(data => {
        res.send(data)
    })
})

module.exports = router;