var express = require('express'),
  fs = require('fs');
  app = express();

app.set('port', 5000); // Listening port

// Getting '/'
app.get('/', function(req, res){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  plog(ip);
  res.send('podrio el que lo lea');
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
function plog(str){
  var file = fs.readFileSync('./req.json', 'utf8');
  var final_log = file + '\n' + str;
  fs.writeFile('./req.json', final_log, function(err) {
    if(err){
      console.log(err);
    }else{
      console.log('Nice!!');
    }
  });
}

/*
JSON.stringify(req, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
});
*/
