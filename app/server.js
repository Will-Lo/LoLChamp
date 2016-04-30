var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(`${__dirname}/src/client/public`));

app.listen(3000, function () {
	console.log('Server running at http://localhost:3000');
});