import Vue from "vue";
import VueRouter from "vue-router";
import WaterfallFlow from "./moudle/waterfall-Flow";
import Home from "./moudle/home";
import Vant from "./moudle/vant";
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
  ],
  history,
});

export default router;
