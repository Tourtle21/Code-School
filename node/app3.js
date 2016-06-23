var express = require("express");
var morgan = require("morgan");
var app = express();

app.use(morgan('dev'));

app.get("/todos", function (req, res){
	res.set("content-Type", "text/html");
	res.sendFile(__dirname + "/todos.index.html");
});

app.post("/todos", function (req, res){
	res.end("POST /todos KWSN create");
});

app.listen(8000);
console.log("Listening on port 8000")