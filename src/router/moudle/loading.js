const Loading = () => import("views/loading/index.vue");

export default [
  {
    path: "/loading",
    name: "loading",
    component: Loading,
    meta: {
      title: "Loading",
    },
  },
];
