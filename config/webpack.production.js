const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: '',
  mode: 'production',
  output: {
    // This is required to make sure the asset references are relative to the CSS files in the production build
    publicPath: ''
  },

  plugins: [
    // new UglifyJsPlugin()
  ]
});
