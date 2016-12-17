"use strict"

var express = require('express'),
		router  = require('./api'),
 		app     = express();

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function() {
	console.log('hello creatures....go to port 3000');
});
