const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

process.env.ENV = 'production';
const ENV = process.env.NODE_ENV;

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].min.css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].min.js',
    chunkFilename: '[id].[hash].chunk.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    extractSass,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      extractComments: true,
      mangle: {
        keep_fnames: true,
      },
    }),
    new ExtractTextPlugin('[name].[hash].min.css'),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Address Book',
      filename: 'index.html',
      template: 'src/index.prod.html',
    }),
  ],
});
