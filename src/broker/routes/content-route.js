const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')


const { ServiceRequest } = require('../ServiceRequest')
const contentCofig = require('../../../resources/services-routing.json').content

var router = express.Router();
router.get('*', (req, res) => {
    console.log('yes');
    new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'GET').then(data => {
        res.send(data)
    })
})

router.post('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'POST').then(data => {
        res.send(data)
    })
})

module.exports = router;