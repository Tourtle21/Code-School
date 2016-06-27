var express = require("express");

var app = express();

app.get('/english', function (req, res) {
	res.end("Hello, World!");
});

app.get('/espanol', function (req, res) {
	res.end("¡Hola Mundo!");
});

app.get('/doitch', function (req, res) {
	res.end("germans here");
});

app.get("/orange", function(req, res) {
	res.redirect("/espanol");
})
app.listen(8000);
console.log("Our server has started on port 8000")