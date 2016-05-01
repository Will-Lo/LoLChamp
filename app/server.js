var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var reactHotLoader = require("react-hot-loader");

app.use(express.static(`${__dirname}/frontend`));
app.listen(3000, function () {
	console.log('Server running at http://localhost:3000');
});

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	proxy: {
		"*": "http://localhost:3000"
	}
}).listen(3001, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Server running at localhost:3001');
});
