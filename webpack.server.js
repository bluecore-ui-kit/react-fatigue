'use strict';

const config = require('./webpack.config');

module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    publicPath: '/dist/'
  })
});
