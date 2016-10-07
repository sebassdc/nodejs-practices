var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){
	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		//Expression regular que busca {}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Sebastian";
		for (var i = variables.length - 1; i >= 0; i--) {
			// ejecutamos expresion regular como codigo de javascript
			var value = eval(variables[i]);
			html_string = html_string.replace("{"+variables[i]+"}", value)
		}



		var nombre = "Sebas";
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);
