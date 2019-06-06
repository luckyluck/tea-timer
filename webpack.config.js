const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
});

module.exports = {
  output: {
    path: __dirname + '/build',
    filename: '[hash].bundle.js',
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
    }),
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/build/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See more https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin({
      // Write Logs to Console
      verbose: true,
    }),
    new CopyPlugin([
      { from: 'public/favicon.ico', to: 'favicon.ico' },
      { from: 'public/manifest.json', to: 'manifest.json' },
      { from: 'public/serviceWorker.js', to: 'serviceWorker.js' },
      { from: 'public/images', to: 'images' },
    ]),
  ]
};
