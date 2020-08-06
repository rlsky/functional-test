import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import http from "@/http";
import waterfall from "vue-waterfall2";
import store from "./vuex/index";
import LyTab from "ly-tab";
import { Toast } from "vant";

Vue.config.productionTip = false;
Vue.prototype.$http = http;
// Vue.config.silent = true;  取消所有的报错及日志
Vue.use(waterfall);
Vue.use(Toast);
Vue.use(LyTab);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
