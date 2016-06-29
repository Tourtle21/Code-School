var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var skipper = require('skipper')

//Configure Mongoose
mongoose.connect('mongodb://mongodb.cs.dixie.edu/SudoBashBash');

var TodoController = require('./todo/controller')

var app = express()

app.use(morgan('dev'))
app.use(skipper())
app.use('/todos', require('./todo/routes'))



app.all('/', function(req, res) {
	res.end('You have made it to day 2! finally')
})

app.listen(8021, function() {
	console.log('successfuly connected to port 8021')
})

