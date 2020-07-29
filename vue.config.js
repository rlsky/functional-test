// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); //join用于拼接
}

module.exports = {
  outputDir: "dist",
  devServer: {
    port: 4001,
    open: true,
  },
  configureWebpack: {
    resolve: {
      //配置组件文件夹的别名
      alias: {
        components: resolve("src/components"),
        views: resolve("src/views"),
      },
    },
  },
};
