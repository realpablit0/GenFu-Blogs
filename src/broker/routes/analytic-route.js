const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const { ServiceRequest } = require('../service-request')
const analyticCofig = require('../../../resources/services-routing.json').analytic

var router = express.Router();
router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': analyticCofig.url, 'port': analyticCofig.port }, 'GET').then(data => {
        res.send(data)
    }).catch(e => { res.send(e) })
})

module.exports = router;