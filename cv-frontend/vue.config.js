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
            filename: 'index-app.html', // output as dist/*
        },
        plugin: {
            entry: 'src/main-plugin.js', //entry for the public page
            template: 'public/index.html', // source template
            filename: 'index-plugin.html', // output as dist/*
        },
        dev: {
            entry: 'src/main-dev.js',
            template: 'public/dev.html',
            filename: 'dev.html',
        },
        devHomepage: {
            entry: 'src/main-dev.js',
            template: 'public/dev-homepage.html',
            filename: 'index.html',
        },
        devDefaultPage: {
            entry: 'src/main-dev.js',
            template: 'public/dev-page.html',
            filename: 'default.html',
        },
        devPostPage: {
            entry: 'src/main-dev.js',
            template: 'public/dev-post.html',
            filename: 'post.html',
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
                    @import "@/styles-global/main.scss";
                `,
            },
        },
    },
};
