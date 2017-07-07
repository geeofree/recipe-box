const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: __dirname + '/src/app.main.js',
  output: {
    path: __dirname + '/public',
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
