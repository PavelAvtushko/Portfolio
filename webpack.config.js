var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./client/index.js']
    },
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=10000!img?progressive=true' },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
};
