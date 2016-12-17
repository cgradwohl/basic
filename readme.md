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

app.get('/api/todos', function(req, res) {
	//content type header of typle text/html
	//but we want json
	res.send('here are the todos');
	res.json({todos:[]});
})

app.listen(3000, function() {
	console.log("listeningnt on port 3000");
});

npm install -g nodemon



























































