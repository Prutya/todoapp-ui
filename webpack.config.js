const path = require('path')

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const nodeEnv = process.env.NODE_ENV

let config = {
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

if (nodeEnv === 'development') {
  config = merge(config, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      port: 4000,
      historyApiFallback: true
    }
  })
}

if (nodeEnv === 'production') {
  config = merge(config, {
    mode: 'production'
  })
}

module.exports = config
