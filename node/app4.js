var express = require("express");
var morgan = require("morgan");
var app = express();
var skipper = require("skipper");

var todos = [];

app.set("views", "./views");
app.set("view engine", "pug");


app.use(morgan('dev'));
app.use(skipper());

app.get("/todos/new", function (req, res){
	res.render("todos.new.pug");
});
app.get('/todos', function (req, res) {
	res.render("todos.index.pug", { todos: todos });
});

app.post("/todos", function (req, res){
	todos.push(req.body.title);
	res.redirect('/todos');
});

app.listen(8000);
console.log("Listening on port 8000")