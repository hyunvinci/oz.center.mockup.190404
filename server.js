var express = require('express');
var path = require('path');

var app = express();

var readline = require('reqadline-sync');

var port = readline.question('Port number is ');

app.use(express.static(path.join(__dirname, 'oz.center.mockup.190404')));

app.listen(port, function(){
	console.log("Server running at http://127.0.0.1:"+`${port}`);
});
