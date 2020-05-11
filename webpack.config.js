const path = require('path')
const webpack = require('webpack')

const SRC_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build')

config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 8080,
  },
}

module.exports = [config]
