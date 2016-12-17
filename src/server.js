'use strict'

var express = require('express');

var app = express();



app.listen(3000, function(req, res) {
	res.send('hello creatures....');
});
