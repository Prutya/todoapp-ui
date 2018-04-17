const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
  output: {
    filename: 'assets/[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    alias: {},
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
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
      },
      {
        test: /\.css?$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new Dotenv({ systemvars: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
}

if (!(process.env.NODE_ENV === 'production')) {
  config.devtool = 'eval-source-map'
  config.devServer = {
    port: 4000,
    historyApiFallback: true
  }
}

module.exports = config
