import Vue from 'vue'
import VueRouter from 'vue-router'
import WaterfallFlow from './moudle/waterfall-Flow'
import Home from './moudle/home'
import Vant from './moudle/vant'
import Vuex from './moudle/vuex'
import callKeyboard from './moudle/call-Keyboard'
import nextTick from './moudle/nextTick'
import lyTab from './moudle/ly-Tab'
import canvasPage from './moudle/canvas-Page'
import scrollOption from './moudle/scroll-Option'
import componentMerge from './moudle/component-Merge'
import Loading from './moudle/loading'
import Abc from './moudle/abc'
import cityList from './moudle/city-List'
import jsInterview from './moudle/js-Interview'
import swiperView from './moudle/swiperView'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...WaterfallFlow,
    ...Home,
    ...Vant,
    ...Vuex,
    ...callKeyboard,
    ...nextTick,
    ...lyTab,
    ...canvasPage,
    ...scrollOption,
    ...componentMerge,
    ...Loading,
    ...Abc,
    ...cityList,
    ...jsInterview,
    ...swiperView
  ],
  history
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
