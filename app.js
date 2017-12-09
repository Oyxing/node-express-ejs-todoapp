var express = require('express');
//自定义模块
var todoContriller = require('./controller/tosoContriller')
var app = express()

app.set('view engine','ejs')

app.use('/public',express.static('public'))

todoContriller(app)

app.listen(3003)