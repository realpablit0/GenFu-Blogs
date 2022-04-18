const express = require('express')
const { ServiceRequest } = require('../service-request')
const accountCofig = require('../../../resources/services-routing.json').account

var router = express.Router();

router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': accountCofig.url, 'port': accountCofig.port }, 'GET').then(data => {
        res.send(data)
    })
})


module.exports = router;