module.exports = {
  entry:  './app/index.jsx',
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
        loader: 'babel',
        include: __dirname + '/app'
      }
    ]
  }
}
