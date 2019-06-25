const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
/**
 * This webpack config is used by Storybook
 */
module.exports = webpackMerge(commonConfig, {
});
