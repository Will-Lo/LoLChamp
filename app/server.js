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

	console.log('Development server running at localhost:3001');


//	getPlayerId ('Ian952','a');

});
/*
var https = require('https');
var apikey = 'c49048cc-8980-4f7b-a3d1-9c0b551a80ad';

var masteryApi = {
  host: 'na.api.pvp.net',
  path: 'a'
};

function getRequest (request,callback) {
	https.request (request,function(response){
		var str = '';

    response.on('data',function(chunk){
      str += chunk;
    });

    response.on('end',function(){
      console.log(str);
			callback(str);
    });
	}).end();
}

function getPlayerId (name,callback) {
	var playerApi = {
		host: 'na.api.pvp.net',
		path: '/api/lol/na/v1.4/summoner/by-name/'+name+'?api_key='+apikey
	}

	getRequest(playerApi,function(res) {
		var player = JSON.parse(res);

		console.log('Player ID: '+player[name.toLowerCase()].id);

		callback(player[name.toLowerCase()].id);
	});
}

function getMastery (player, callback) {
  //get mastery now
}
*/