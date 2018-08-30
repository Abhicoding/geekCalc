const path = require('path')
const webpack = require('webpack')

const PUBLIC_PATH = path.join(__dirname, 'public')
const BUILD_PATH = path.join(PUBLIC_PATH, 'build')

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server','./src/index.js'],
  output: {
  path:path.resolve(BUILD_PATH, 'build'),
  publicPath: path.resolve(BUILD_PATH, 'build'),
  filename: 'bundle.index.js'
  },
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  plugins:[new webpack.HotModuleReplacementPlugin, new webpack.NamedModulesPlugin],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
}