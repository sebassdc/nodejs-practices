var express = require("express");
var bodyParser = require('body-parser');
var User = require("./models/user").User;
var cookieSession = require("cookie-session");
var router_app = require("./route_app");
var session_middleware = require("./middleware/session");
var methodOverride = require("method-override");


var app = express();

//using
app.use(express.static('public'));
app.use(bodyParser.json()); // para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(cookieSession({
	name: "session",
	keys: ["llave1", "llave2"]
}));

// setings
app.set('port', 8080);
app.set("view engine", "jade");

// Verbos Http => GET / POST / PUT / PATCH / OPTIONS / HEADERS /

app.get("/" , function(req, res){
	res.render("index");
});

app.get("/singup" , function(req, res){
	User.find(function(err, doc){
		res.render("singup");
	});
});

app.get("/login" , function(req, res){
	res.render("login");
});

// POST
app.post("/users" , function(req, res){
	var user = new User({
		email: req.body.email,
		password: req.body.password,
		password_confirmation: req.body.password_confirmation,
		username: req.body.username
	});
	user.save().then(function(us){
		res.send("Guardamos el usuario exitosamente");
	}, function(err){
		if(err){
			res.send("No pudimos guardar la informacion");
		}
	});
});

app.post("/sessions" , function(req, res){
	User.findOne({email: req.body.email, password:req.body.password}, function(err, user){
		req.session.user_id = user._id;
		res.redirect("/app");
	});
});

app.use("/app", session_middleware);
app.use("/app", router_app);

app.listen(app.get('port'), function(){
	console.log("Listening on port: ", app.get('port'));
});
