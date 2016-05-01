var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(`${__dirname}/frontend`));

app.listen(3000, function () {
	console.log('Server running at http://localhost:3000');
});