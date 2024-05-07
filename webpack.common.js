/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shaun MacWilliam, Web Developer',
      template: './index/index.html',
      filename: 'index.html',
    }),
    new Dotenv({
      path: '.env',
      safe: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
