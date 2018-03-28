const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function readFromEnv(key) {
  return "\"" + process.env[key] + "\""
}

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
              minimize: true
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
    // NOTE: Since we can't use dotenv on Heroku
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': readFromEnv('NODE_ENV'),
      'process.env.TODOAPP_HOST_API': readFromEnv('TODOAPP_HOST_API')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

module.exports = config;
