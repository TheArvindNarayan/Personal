var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './assets/scripts/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'fulfil-ui.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [ 'style-loader', 'css-loader','sass-loader' ]
      }
    ]
  }
};

module.exports = config;