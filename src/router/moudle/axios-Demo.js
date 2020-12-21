const AxiosDemo = () => import("views/axios-Demo/index.vue");

export default [
  {
    path: "/axiosdemo",
    name: "AxiosDemo",
    component: AxiosDemo,
    meta: {
      title: "AxiosDemo",
    },
  },
];
