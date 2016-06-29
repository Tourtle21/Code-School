var express = require('express')
var morgan = require('morgan')
var skipper = require('skipper')

var app = express()

app.use(morgan('dev'))
app.use(skipper())

app.use('/todos', require('./todo/routes'))

app.all('/', function (req, res)
{
	res.end('You have made it to day 2!')
})

app.listen(8062, function ()
{
	console.log('Listening on localhost:8062')
})
