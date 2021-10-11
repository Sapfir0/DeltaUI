const path = require('path');
const css_regex = '/\\.css$/';

module.exports = {
    webpackFinal: async (config) => {
        const webComponentsRule = config.module.rules.find(
            (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false,
        );

        const cssRule = config.module.rules.find((_) => _ && _.test && _.test.toString() === css_regex);

        webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)@spark-design/tokens(.*)\\.ts$`));

        config.module.rules = [
            ...config.module.rules.filter((_) => _ && _.test && _.test.toString() !== css_regex),
            {
                ...cssRule,
                exclude: /\.module\.css$/,
            },
            {
                ...cssRule,
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                  loader: 'lit-scss-loader',
                  options: {
                    minify: true, // defaults to false
                  },
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
        ];

        config.resolve.alias = {
            ...config.resolve.alias,
            '@spark-design/tokens': path.resolve(__dirname, '../../tokens/src'),
        };

        return config;
    },
    stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
};
