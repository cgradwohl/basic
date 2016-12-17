"use strict"

var express = require('express');
var app = express();

// api router


// api routes
app.use('/', express.static('public'));

app.get('/api/yodawg', function(req, res) {
	res.send('hello creature....');
	res.json({todos:[]});
});



app.listen(3000, function() {
	console.log('hello creatures....');
});
