// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        // plugins: [
        //     new BundleAnalyzerPlugin()
        // ],
    },
    pages: {
        app: {
            entry: 'src/main.js', //entry for the public page
            template: 'public/index.html', // source template
            filename: 'index-app.html', // output as dist/*
        },
        plugin: {
            entry: 'src/main-plugin.js',
            template: 'public/index.html',
            filename: 'index-plugin.html',
        },
        dev: {
            entry: 'src/main-dev.js',
            template: 'public/dev-homepage.html',
            filename: 'index.html',
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles-global/main.scss";
                `,
            },
        },
    },
};
