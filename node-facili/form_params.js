var http = require("http");
		fs = require("fs"),
		params_parser = require("./params_parser.js"),
		render_views = require('./render_views.js');

var p = params_parser.parse;
var render = render_views.render;

http.createServer(function(req, res){
	if(req.url.indexOf("favicon.ico") > 0){ return;}

	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		
		var parametros = p(req);
		res.writeHead(200, {"Content-Type": "text/html"});

		res.write(render(html_string, parametros));

		res.end();
	});
}).listen(8080);
