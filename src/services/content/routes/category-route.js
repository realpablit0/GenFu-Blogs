const express = require('express');
const createBlog = require('../blog-modules/createBlog');
const { MongoDB } = require('../MongoDB')

const router = express.Router();
const mongoDB = new MongoDB({
    'database': 'Content',
    'collection': 'Categorys',
    'dataSource': 'GenFu-Blogs',
    'API_KEY': require('../../../../resources/private/dbkey.json').API_KEY
})

router.post('/', (req, res) => {
    res.send('success /content/category')
})

router.post('/new', (req, res) => {
    createBlog(mongoDB, req.body).then(result => {
        res.json(result)
    })
})

module.exports = router;