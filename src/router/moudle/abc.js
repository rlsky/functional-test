const Abc = () => import("views/abc/index.vue");

export default [
  {
    path: "/abc",
    name: "abc",
    component: Abc,
    meta: {
      title: "abc",
    },
  },
];
