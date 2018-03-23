const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var apiHost;
switch (process.env.NODE_ENV) {
  case 'production':
    apiHost = 'https://todoapp-api-rails.herokuapp.com'
  case 'development':
  default:
    apiHost = "'http://localhost:3000'"
}

module.exports = {
  output: {
    filename: 'bundle.js',
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
    }),
    new webpack.DefinePlugin({
      __API__: apiHost
    })
  ]
}
