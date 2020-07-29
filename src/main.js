import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import waterfall from "vue-waterfall2";
import http from "../src/request/http";
import { Toast } from "vant";

Vue.config.productionTip = false;
// Vue.config.silent = true;  取消所有的报错及日志
Vue.use(waterfall);
Vue.use(Toast);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
