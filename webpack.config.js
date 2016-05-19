module.exports = {
  entry:  './app',
  output: {
    path:     'builds',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx/,
        loader: 'babel',
        include: __dirname + '/app'
      }
    ]
  }
};
