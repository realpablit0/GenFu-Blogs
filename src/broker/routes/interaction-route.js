const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const { ServiceRequest } = require('../service-request')
const interactionCofig = require('../../../resources/services-routing.json').interaction

var router = express.Router();
router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': interactionCofig.url, 'port': interactionCofig.port }, 'GET').then(data => {
        res.send(data)
    })
})


module.exports = router;