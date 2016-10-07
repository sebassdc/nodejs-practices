var express = require('express'),
  client_track = require('client_track');
  app = express();

app.set('port', 5000); // Listening port

// Getting '/'
app.get('/', function(req, res){
  client_track.reqlog(req);
  res.send('helo world');
});

// Listening
app.listen(app.get('port'), function(){
  console.log("Escuchando en el puerto: ", app.get('port'));
});

// LEYENDO ARCHIVOS ('filename', 'codificacion', callback(error, data));
/* fs.readFile('./index.js', 'utf-8', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
*/


// If the json has cirular references
/*
var cache = [];
JSON.stringify(req.headers["user-agent"], function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
}); */
