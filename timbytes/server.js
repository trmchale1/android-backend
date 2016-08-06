var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/first.html');
});

app.listen(8080,function() {
	console.log('Listening on 8080');
});

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/frontend/x', function(req,res){

	var subject = req.body.subject
	body = req.body.body;
	console.log(subject + ' ' + body); 
	res.send('subject: ' + subject +  ' body: ' + body);
});
