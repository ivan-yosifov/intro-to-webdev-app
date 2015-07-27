var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
app.get('/bye.txt', function(req, res){
  res.send('Bye noob!');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});