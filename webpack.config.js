var webpack = require('webpack')

module.exports = {
  entry:  [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ],
  output: {
    path:     'builds',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: __dirname + '/app'
      }
    ]
  }
}
