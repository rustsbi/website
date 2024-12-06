module.exports = {
  pages:{
    index:{
      entry:'src/main.js',
    }
  },
  lintOnSave: false, // 关闭语法检查

  devServer:{
    port:8087,
    proxy: 'http://localhost:8888',
  },
  publicPath: '/website/' // publicPath应与仓库名称相同
}

