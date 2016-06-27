var express = require('express')
var morgan = require('morgan')
var skipper = require('skipper')

var TodoController = require('./todo/controller')

var app = express()

app.use('/todos', require('./todo/routes'))
app.use(morgan('dev'))
app.use(skipper())

app.all('/', function(req, res) {
	res.end('You have made it to day 2! finally')
})

app.listen(8021, function() {
	console.log('successfuly connected to port 8021')
})

