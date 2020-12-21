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
import face from './moudle/face'
import axiosDemo from './moudle/axios-Demo'


// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior (to,from,savedPosition) {
    console.log(from,savedPosition)
    if (to.hash) {
      console.log(to.hash,'to.hash')
      return {
        selector: to.hash
      }
    }
  },
  routes: [
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
    ...swiperView,
    ...face,
    ...axiosDemo
  ],
  mode:'history'
})

router.beforeEach((to, from, next) => {
  console.log('路由全局to对象:',to)
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!sessionStorage.getItem('token')){
      next({
        path: '/loading', 
        query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else{
    next()
  }
  console.log('全局前置守卫:'+'去哪里-->'+to.path,',来自哪里--->'+from.path)
  
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
router.beforeResolve((to, from, next)=>{
  console.log('全局解析守卫:'+'去哪里-->'+to.path,',来自哪里--->'+from.path)
  next()
})
router.afterEach((to, from)=>{
  console.log('全局后置守卫:'+'去哪里-->'+to.path,',来自哪里--->'+from.path)
})
export default router
