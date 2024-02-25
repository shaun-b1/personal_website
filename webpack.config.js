/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index/index.js',
    nav: './nav/nav.js',
    title: './title/title.js',
    social_links: './social_links/social_links.js',
    about: './about/about.js',
    github_pins: './github_pins/github_pins.js',
    technologies: './technologies/technologies.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: 'localhost',
    port: 8080,
    compress: false,
    webSocketServer: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shaun MacWilliam Dev',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
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
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
