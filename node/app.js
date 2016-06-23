var http = require('http');

var server = http.createServer(function (req, res) {
	console.log("I got a request!");
	res.writeHead(200, {"Content-Type": "text/plain"});

	if (req.url === "/english")
	{
		res.end("Hello, World")
	}
	else if (req.url === "/espanol")
	{
		res.end("¡Hola Munda!");
	}
	else if (req.url === "/deutsch")
	{
		res.end("Hello, German")
	}
	
});

server.listen(8000);

console.log("Our server has started on port 8000");