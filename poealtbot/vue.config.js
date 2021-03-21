module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      chainWebpackMainProcess: config => {
        config.module.rule('node').test(/\.node$/).use('node-loader').loader('node-loader').end()
      },
      chainWebpackRendererProcess: config => {
        config.module.rule('node').test(/\.node$/).use('node-loader').loader('node-loader').end()
      },
    }
  }
};
