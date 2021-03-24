module.exports = {
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Кавер-группа Maple Season';
        return args;
      })
  }
}