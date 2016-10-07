var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){
	fs.readFile("./index.html", function(err, html){
		var i = 0;
		console.log("g");
		//res.write("<p>");
		res.writeHead(200, {"Content-Type": "text/html"});
		while (i < 2000) {
			i++;
			res.write("<h1>tequiero</h1>");
		}
		//res.write("</p>");
		res.end();
	});
}).listen(8080);
