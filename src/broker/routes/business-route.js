const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const { ServiceRequest } = require('../service-request')
const businessCofig = require('../../../resources/services-routing.json').business

var router = express.Router();
router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': businessCofig.url, 'port': businessCofig.port }, 'GET').then(data => {
        res.send(data)
    })
})


module.exports = router;