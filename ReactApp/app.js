var express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
// var passport = require('passport')
var skipper = require('skipper')
var colors = require('colors')
var path = require('path')

//Configure Mongoose
mongoose.connect('mongodb://mongodb.cs.dixie.edu/bbarney435');

mongoose.connection.on('connected', function() {
	console.log("Connected to DB".green)
})
mongoose.connection.on('error', function() {
	console.log("Connection to DB failed".red)
})
// require('./config/passport')


var app = express()

// Set up statics
app.use(express.static(__dirname + '/dist/'))

app.use(morgan('dev'))
// app.use(passport.initialize())
app.use(skipper())

app.use('/todos', require('./server/todo/routes'))
app.use('/users', require('./server/user/routes'));



app.all('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(8999, function() {
	console.log('successfuly connected to port 8021')
})

