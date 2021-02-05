const componentMerge = () => import('views/component-Merge/index.vue')

export default [
  {
    path: '/componentMerge',
    name: 'componentMerge',
    component: componentMerge,
    meta: {
      title: '组件合并'
    }
  }
]
