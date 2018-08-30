const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.index.js'
  },
  mode: 'development',
  devtool: 'cheap-eval-source-map',
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