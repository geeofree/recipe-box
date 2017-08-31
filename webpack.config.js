const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

// Project entry & output paths
const DevPath    = path.join(__dirname, 'src')
const OutputPath = path.join(__dirname, 'public')

// Plugins
const ExtractCSS = new ExtractTextPlugin('style.css')
const WebpackHMR = new webpack.HotModuleReplacementPlugin()

module.exports = {
  entry: DevPath,
  output: {
    path: OutputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: OutputPath,
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    ExtractCSS,
    WebpackHMR
  ]
}
