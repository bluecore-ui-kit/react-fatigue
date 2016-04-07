'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },

  entry: {
    main: './index.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.json/,
        loader: 'json'
      }, {
        test: /\.scss/,
        exclude: /\.use\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.use.scss/,
        loader: 'style/useable!css!sass'
      }
    ]
  },

  devtool: 'source-map'
};
