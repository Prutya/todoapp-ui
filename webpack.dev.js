const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    port: 4000,
    historyApiFallback: true
  }
});
