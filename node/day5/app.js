var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var passport = require('passport')
var skipper = require('skipper')

//Configure Mongoose
mongoose.connect('mongodb://mongodb.cs.dixie.edu/SudoBashBash');

require('./config/passport')

var TodoController = require('./todo/controller')

var app = express()

app.use(morgan('dev'))
app.use(passport.initialize())
app.use(skipper())

app.use('/todos', require('./todo/routes'))
app.use('/users', require('./user/routes'));



app.all('/', function(req, res) {
	res.end('You have made it to day 2! finally')
})

app.listen(8021, function() {
	console.log('successfuly connected to port 8021')
})

