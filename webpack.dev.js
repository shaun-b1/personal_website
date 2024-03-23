const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: 'localhost',
    port: 8080,
    compress: false,
    webSocketServer: false,
  },
});
