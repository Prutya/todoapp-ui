const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const config = {
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    alias: {},
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: isProduction
            }
          },
          {
            loader: 'sass-loader'
          }
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
              presets: ['react', 'es2015'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/templates/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

var apiHost = isProduction ?
  "'https://todoapp-api-rails.herokuapp.com'" :
  "'http://localhost:3000'";

config.plugins.push(new webpack.DefinePlugin({
  __API__: apiHost
}));

if (!isProduction) {
  config.devtool = 'eval-source-map';
  config.devServer = {
    contentBase: path.resolve(__dirname, './build'),
    port: 4000,
    historyApiFallback: true
  };
}

module.exports = config;
