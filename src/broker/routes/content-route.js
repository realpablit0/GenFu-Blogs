const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')


const { ServiceRequest } = require('../service-request')
const contentCofig = require('../../../resources/services-routing.json').content

var router = express.Router();
router.get('*', (req, res) => {
    console.log('yes');
    // new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'GET').then(data => {
    //     res.send(data)
    // })
    res.send('successss get')
})

router.post('*', (req, res) => {
    // new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'POST').then(data => {
    //     res.send(data)
    // })
    res.send('successss POSt')
})

module.exports = router;