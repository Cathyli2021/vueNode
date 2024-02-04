module.exports = {
  transpileDependencies: true,
  lintOnSave: false,  // 解除语法强校验
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001', //node.js服务器运行的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://127.0.0.1:3001', //路径重写
        },
      },
    },
  },
};
