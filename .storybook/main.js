const css_regex = '/\\.css$/';

const constructPublicPath = (isProduction) => () => {
    return isProduction ? '/DeltaUI/' : '/';
};

module.exports = {
    webpackFinal: async (config) => {
        const cssRule = config.module.rules.find((_) => _ && _.test && _.test.toString() === css_regex);

        config.module.rules = [
            ...config.module.rules.filter((_) => _ && _.test && _.test.toString() !== css_regex),
            {
                ...cssRule,
                exclude: /\.module\.css$/,
            },
            {
                ...cssRule,
                test: /\.css|\.s(c|a)ss$/,
                use: [
                    {
                        loader: 'lit-scss-loader',
                        options: {
                            minify: true, // defaults to false
                        },
                    },
                    'extract-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ];

        return config;
    },
    managerWebpack: async (config) => {
        publicPathGetter = constructPublicPath(config.mode === 'production');
        config.output.publicPath = publicPathGetter();
        console.log(config.output.publicPath);
        return config;
    },
    stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
};
