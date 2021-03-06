const { root } = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const webpack = require('webpack');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: root('./src/main.browser.ts'),
  output: {
    filename: 'client.js',
  },
  target: 'web',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'head',
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer',
    }),
  ],
};
