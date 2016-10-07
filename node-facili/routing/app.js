var express = require("express");

var app = express();

app.set('port', 8080);
app.set("view engine", "jade");

// Verbos Http => GET / POST / PUT / PATCH / OPTIONS / HEADERS /

app.get("/" , function(req, res){
	res.render("index");
});

app.get("/:nombre" , function(req, res){
	res.render("form", {nombre: req.params.nombre});
});

app.post("/", function(req, res){
	console.log("Posted");
	res.render("form")
});

app.listen(app.get('port'), function(){
	console.log("Listening on port: ", app.get('port'));
});
