const Face = () => import(/* webpackChunkName: "group-Face" */ 'views/face/index.vue')
const QianTaoOne= () => import(/* webpackChunkName: "group-Face" */ 'views/face/compotent/qiantaoOne') // 路由懒加载
const QianTaoTwo= () => import(/* webpackChunkName: "group-Face" */ 'views/face/compotent/qiantaoTwo')

export default [
  {
    path: '/face/:id',// 动态路由
    name: 'face',
    component: Face,
    // props:true, // 布尔值模式 开启props,params参数可在组件的props中获取到,不需要在$route.parms.id
    props:(route)=>{ // 函数模式 自定义返回给props的内容
      console.log(route)
      return { woqu:route.query.q,id:route.params.id}
    },
    // props:{duixaing:'123456'}, // 随意决定传过去的值,但是静态的,因为对象中的值是写死的,灵活的话可以使用函数模式
    children:[// 嵌套路由
      {
        path:'qiantaoOne',
        components:{// 命名视图
          default: QianTaoOne,
          a:QianTaoTwo,
          b:QianTaoOne
        },
        props: { default: true, a: false ,b:true},
        meta:{requiresAuth: true}
      },
      {
        path:'qiantaoTwo',
        components:{
          default: QianTaoTwo,
          a:QianTaoOne,
          b:QianTaoTwo
        },
        props: {default: false,  a: true, b: false},
        meta:{requiresAuth: true}
      },
      {path:"",redirect:"qiantaoOne"}
    ],
    meta: {
      title: 'face'
    },
    beforeEnter: (to, from, next) => {
      console.log('face独守:'+'去哪里-->'+to.path,',来自哪里--->'+from.path)
      next()
    }
  }
]
