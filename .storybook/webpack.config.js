module.exports = {
    output: {
        publicPath: '', // этот путь будет добавляться в пути до каждого бандла внутри html и других бандлов
    },
    module: {
        rules: [
            {
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
        ],
    },
};
