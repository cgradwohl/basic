'use strict'
// api module

var express   = require('express'),
    mock_data = require('../../mock/data.json'),
    router    = express.Router();


// api endpoints
router.get('/yodawg', function(req, res) {
	//res.send('hello creature....');
	res.json({todos:mock_data});
});


// TODO: add POST router

// TODO: add PUT router

// TODO: add GET router

module.exports = router;
