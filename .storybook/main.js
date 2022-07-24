const custom = require('./webpack.config.js');

module.exports = {
    webpackFinal: async (config) => {
        const customWebpack = custom;
        customWebpack.output.publicPath = config.mode !== 'production' ? '/DeltaUI/' : '/';
        console.log(customWebpack);
        return {
            ...config,
            module: { ...config.module, rules: [...customWebpack.module.rules, ...config.module.rules] },
        };
    },
    stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
};
