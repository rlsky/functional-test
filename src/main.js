import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import http from "@/http";
import 'lib-flexible'
import waterfall from 'vue-waterfall2'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/index'
import LyTab from 'ly-tab'
import { Toast } from 'vant'
import '../node_modules/swiper/dist/css/swiper.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.prototype.$http = http;
// Vue.config.silent = true;  取消所有的报错及日志
Vue.use(waterfall)
Vue.use(Toast)
Vue.use(LyTab)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
