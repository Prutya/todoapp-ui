var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR   = path.resolve(__dirname, './src/client');

const config = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  entry: { main: APP_DIR + '/index.jsx' },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  resolve: {
    alias: {},
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.css|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'   },
          { loader: 'sass-loader'  }
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

module.exports = config;
