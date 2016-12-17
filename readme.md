mkdir projectname
cd projname

mkdir src

npm init
*entry src/sever.js

mkdir public
cd public

git clone url@foo.com .

ls .git
rm -rf .git

cd ..

npm install express --save-exact

touch src/server.js

echo 'node_modules' >> .gitignore

git init

reset

git add .
git commit -m ""

atom .

// server.js
'use strict'

var express = requires('express');
var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/api/todos', function(req, res) {
	res.json({todos:[]});
})

// TODO: PUT,POST,GET routes

app.listen(3000, function() {
	console.log("listening on port 3000");
});

npm install -g nodemon

mkdir src/api/

// api/index.js
var router = express.Router();

router.get('/api/todos', function(req, res) {
	res.json({todos:[]});
})

// TODO: PUT,POST,GET routes

module.exports = router;

// server.js
var express = requires('express');
var router = require('./api');
var app = express();
