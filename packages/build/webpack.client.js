const path = require('path');

console.log('cwd: ', path.resolve(process.cwd(), './packages/server/index.js'))


module.exports = {
  entry: path.resolve(process.cwd(), './packages/client/index.jsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  output: {
    path: path.resolve(process.cwd(), './client-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      }
    ]
  }
};
