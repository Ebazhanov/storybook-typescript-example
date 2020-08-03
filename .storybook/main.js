const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const SRC = `${ROOT}/src`;
const PATH_TO_SVG = `${SRC}/core/svg`;

module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    webpackFinal: async (config) => {
        const fileLoaderRule = config.module.rules.find(
            (rule) => typeof rule.test.test === 'function' && rule.test.test('.svg'),
        );
        fileLoaderRule.exclude = PATH_TO_SVG;

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
                include: PATH_TO_SVG,
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
