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
    // host: "192.168.43.30",
    open: true,
    proxy: {
      '/api': {
        target: 'http://www.example.org',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
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
  // vue-cli2移动端适配: https://www.cnblogs.com/naxiaoming/p/11558311.html
  // Vue CLI 3与移动端适配: https://www.jianshu.com/p/7aa4250c9293
  // vue 移动端屏幕适配 使用rem: https://www.cnblogs.com/lml2017/p/9953429.html
  // 这次使用的是: flexible和 postcss-px2rem
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
