const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: { presets: ['env'] }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 6969,
    publicPath: 'http://localhost:6969/dist/',
    watchContentBase: true
  },
}
