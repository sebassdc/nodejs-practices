var express = require('express');
var app = express();

var expressa = require('expressa');
app.use('/api', expressa);
app.use('/admin', expressa.admin());

app.listen(8080, function () {
  console.log('Running server on port 8080... ');
});
