const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
    return {
        ...config,

        module: {
            ...config.module,
            rules: custom.module.rules
                .concat(config.rules || [])
                .concat({
                    test: /\.stories\.ts$/,
                    loaders: [
                        {
                            loader: require.resolve('@storybook/addon-storysource/loader'),
                            options: {
                                parser: 'typescript',
                            }
                        }],
                    enforce: 'pre',
                })
        },
        plugins: custom.plugins.concat(config.plugins || []),
	node: { fs: 'empty'}
    };
};
