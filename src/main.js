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
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay ,} from 'swiper'
import 'swiper/swiper-bundle.min.css' // 电影轮播效果组件库样式

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(waterfall)
Vue.use(Toast)
Vue.use(LyTab)
Vue.use(VueAwesomeSwiper)

Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
