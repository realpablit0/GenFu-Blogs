const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')


const { ServiceRequest } = require('../ServiceRequest')
const eventCofig = require('../../../resources/services-routing.json').event

var router = express.Router();
router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': eventCofig.url, 'port': eventCofig.port }, 'GET').then(data => {
        res.send(data)
    })
})
module.exports = router;