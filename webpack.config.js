const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const currentEnivronment = env.NODE_ENV || env.nodeEnv; 
    const isProduction = currentEnivronment === 'prod';
    const devtool = isProduction ? false : 'eval-cheap-module-source-map';

    return {
        entry: {
            deltakit: './src/index.ts',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'js/[name].bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        devtool,
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.scss?$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                      ],
                }
            ],
        },
    };
};