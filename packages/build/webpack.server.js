const path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log('cwd: ', path.resolve(process.cwd(), './packages/server/index.js'))


module.exports = {
  entry: path.resolve(process.cwd(), './packages/server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  output: {
    path: path.resolve(process.cwd(), './server-build'),
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
