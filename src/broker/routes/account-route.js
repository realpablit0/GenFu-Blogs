const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const { MongoDB } = require('../../services/content/MongoDB')


const { ServiceRequest } = require('../ServiceRequest')
const contentCofig = require('../../../resources/services-routing.json').content

var mongoDB = new MongoDB({
    'database': 'Account',
    'collection': 'Account-Logins',
    'dataSource': 'GenFu-Blogs',
    'API_KEY': require('../../../resources/private/dbkey.json').API_KEY
})

var router = express.Router();
router.get('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'GET').then(data => {

    })
})

router.post('*', (req, res) => {
    new ServiceRequest().send(req, { 'url': contentCofig.url, 'port': contentCofig.port }, 'POST').then(data => {
        res.send(data)
    })
})

module.exports = router;