import Vue from "vue";
import VueRouter from "vue-router";
import WaterfallFlow from "./moudle/waterfall-Flow";
import Home from "./moudle/home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    ...WaterfallFlow,
    ...Home,
  ],
  history,
});

export default router;
