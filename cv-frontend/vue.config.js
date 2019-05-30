module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        // entry: {
        //   app: './src/main.js',
        // //   'app-theme': './src/main-theme.js',
        // //   'dev': './src/dev/main.js',
        // },
    },
    pages: {
        app: {
            entry: 'src/main.js', //entry for the public page
            template: 'public/index.html', // source template
            filename: 'index.html', // output as dist/*
        },
        dev: {
            entry: 'src/dev/main.js',
            template: 'public/dev.html',
            filename: 'dev.html',
        },
        // theme: {
        //   // entry: 'src/dev/main-theme.js',
        // }
    },
    // devServer: {
    //   historyApiFallback: {
    //     rewrites: [
    //       { from: /\/index/, to: '/index.html' },
    //       { from: /\/test/, to: '/test.html' }
    //     ]
    //   }
    // }
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss-variables/main.scss";
                `,
            },
        },
    },
};
