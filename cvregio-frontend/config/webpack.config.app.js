/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    mode: 'development',
    //   context: resolve(__dirname, '../src'),
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
        // 'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './app/index.tsx', // the entry point of our app
    ],
    devServer: {
        hot: true, // enable HMR on the server
        historyApiFallback: true,
        open: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
            },
            {
                test: /\.s[ac]ss$/,
                loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    // 'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, '../app-build'),
    },
    plugins: [
        // new CheckerPlugin(),
        // new DependencyExtractionWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'app/index.html' }),
    ],
};
