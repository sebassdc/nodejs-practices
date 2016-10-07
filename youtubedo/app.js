var express = require('express');
var exec = require('child_process').exec;
var fs = require('fs');

var app = express();
app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.post("/download", function(req, res){
	console.log(req);
});

app.listen(app.get('port'), function(){
	console.log('Node corriendo en el puerto', app.get('port'));
});

/*
exec("ls", function(error, stdout, stderr){
	if(error){
		console.log(err);
	}else{
		console.log(stdout)
	}
});
*/
