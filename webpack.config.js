const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const resolve = (dir) => {
  return path.join(__dirname, './', dir)
}

const assetsPath = (_path) => {
  const assetsSubDirectory = 'static'
  return path.posix.join(assetsSubDirectory, _path)
}

const fileDir = './src/js/'
const files = glob.sync(`${fileDir}*.js`)
const entry = {}
_.forEach(files, (i) => {
  const fileName = i.slice(i.lastIndexOf('/') + 1, i.length - 3)
  entry[fileName] = `${fileDir}${fileName}`
})
module.exports = {
  entry,
  output: {
    filename: './dist/[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [resolve('src'), resolve('test')],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      { test: /\.hbs/, loader: "handlebars-loader" },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      jQuery: 'jquery',
      $: 'jquery',
      Moment: 'moment',
    }),
    new UglifyJSPlugin(),
  ]
}
