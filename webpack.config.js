'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.json', '.vue']
  },
  entry: './src/index.js',
  externals: {
    'vue': {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
    'jquery': {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: 'jQuery'
    },
    'moment': 'moment',
    'pc-bootstrap4-datetimepicker': 'pc-bootstrap4-datetimepicker'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-bootstrap-datetimepicker.min.js',
    library: 'VueBootstrapDatetimePicker',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude:  /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:  /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new UnminifiedWebpackPlugin(),
    new VueLoaderPlugin(),
    new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          dead_code: true,
          drop_debugger: true,
          drop_console: true
        },
        warnings: false,
      }
    }),
  ],
  devtool: false,
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
  }
};
