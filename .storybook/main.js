const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const SRC = `${ROOT}/src`;

module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        '@storybook/addon-actions'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.tsx?$/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.stories\.tsx?$/,
                loaders: [
                    {
                        loader: require.resolve('@storybook/source-loader'),
                        options: { parser: 'typescript' },
                    },
                ],
                enforce: 'pre',
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true,
                        },
                    },
                ],
            },
        );

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(SRC, 'node_modules');
        return config;
    },
};
