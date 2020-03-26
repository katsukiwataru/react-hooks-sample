const webpack = require('webpack');
const path = require('path');
const ip = require('ip');
const merge = require('webpack-merge');

const root = path.resolve(__dirname, '../');

module.exports = merge(require('./common.config'), {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devtool: 'source-map',
  devServer: {
    open: true,
    openPage: '',
    contentBase: path.resolve(root, 'dist'),
    watchContentBase: true,
    host: ip.address() || 'localhost',
    port: 3000,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [],
  },
});
