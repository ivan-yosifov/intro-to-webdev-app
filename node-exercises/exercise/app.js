var express = require('express');
var app = express();

app.get('/cheer.txt', function(req, res){
	res.send('You can do it! Disregard the nay-sayers!');
});
app.get('/jeer.txt', function(req, res){
	res.send('Yoooor stupid, Yooor noob! Go die under a tree!');
});

var server = app.listen(8080, function(){
	console.log('Listening on port 8080');
});