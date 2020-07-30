import Vue from "vue";
import VueRouter from "vue-router";
import WaterfallFlow from "./moudle/waterfall-Flow";
import Home from "./moudle/home";
import Vant from "./moudle/vant";
import Vuex from "./moudle/vuex";
import callKeyboard from "./moudle/call-Keyboard";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    ...WaterfallFlow,
    ...Home,
    ...Vant,
    ...Vuex,
    ...callKeyboard,
  ],
  history,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
