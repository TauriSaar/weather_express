const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'));
app.get('/', function (req, res) {
    res.render('default')
})

app.listen(3000)
