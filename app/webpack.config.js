var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'frontend');
var APP_DIR = path.resolve(__dirname, 'frontend/scripts');

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: 'babel-loader',
        loaders : ['react-hot-loader','babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
