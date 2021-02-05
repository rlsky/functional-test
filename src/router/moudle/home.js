const Home = () => import('views/home/index.vue')

export default [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/callKeyboard',
    redirect: '/face/123/qiantaoTwo'
  },
  {
    path: '/lyTab',
    redirect: to => {
      // 动态返回重定向目标
      if (to.query.tiaojsIn === '/lyTab?tiaojsIn=ok') {
        return '/jsInterview'
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/index',
    meta: {
      title: 'Home'
    }
  }
]
