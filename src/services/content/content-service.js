const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.use(`/blog`, require('./routes/blog-route'))
app.use(`/category`, require('./routes/category-route'))


app.get('/', (req, res) => {
    res.send('success content service API')
})
module.exports = app;