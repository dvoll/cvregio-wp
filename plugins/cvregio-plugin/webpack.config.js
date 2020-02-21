const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...defaultConfig,
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.(scss|css)$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
        ],
    },
};
