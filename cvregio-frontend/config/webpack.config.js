/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    //   context: resolve(__dirname, '../src'),
    entry: {
        plugin: './src/index-plugin',
        theme: './src/index-theme',
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
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
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
            //         'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
            //     ],
            // },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, '../dist'),
    },
    plugins: [
        // new CheckerPlugin(),
        new DependencyExtractionWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    enforce: true,
                    // maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    // minSize: 0 // This is example is too small to create commons chunks
                },
                // vendor: {
                // 	test: /node_modules/,
                // 	chunks: "initial",
                // 	name: "vendor",
                // 	priority: 10,
                // 	enforce: true
                // }
            },
            // chunks: 'all',
            // chunks: 'all',
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         enforce: true,
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //     },
            // },
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        // wordpressComponents: '@wordpress/components',
        // 'wordpressComponents2': /@wordpress\/components\//i,
    },
};
