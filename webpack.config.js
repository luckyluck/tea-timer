const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
});

module.exports = {
  output: {
    path: __dirname + '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new Dotenv({
      // Path to .env.development file (this is the default)
      path: process.env.NODE_ENV !== 'production' ? './.env.development' : './.env.production',
      // load .env.development.example (defaults to "false" which does not use dotenv-safe)
      safe: false
    })
  ]
};
