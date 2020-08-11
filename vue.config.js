// vue.config.js
const path = require("path");
const lists = require("./mock/list.json"); // 文章列表数据源

function resolve(dir) {
  return path.join(__dirname, dir); //join用于拼接
}

module.exports = {
  outputDir: "dist",
  devServer: {
    port: 3001, //切换端口
    host: "192.168.43.30",
    open: true,
    proxy: {
      "/3002": {
        target: "http://localhost:3002",
        changeOrigin: true,
        pathRewrite: {
          "^/3002": "",
        },
      },
      "/3003": {
        target: "https://m.you.163.com/xhr/search/searchAutoComplete.json",
        changeOrigin: true,
        pathRewrite: {
          "^/3003": "",
        },
      },
    },
    before(app) {
      app.get("/api/lists", (req, res) => {
        res.json(lists);
      });
    },
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
