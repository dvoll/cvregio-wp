module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    entry: {
      app: './src/main.js',
      'app-theme': './src/main-theme.js'
    }
  }
};
