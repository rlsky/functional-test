const NextTick = () => import('views/nextTick/index.vue')

export default [
  {
    path: '/nextTick',
    name: 'nextTick',
    component: NextTick,
    meta: {
      title: 'NextTick'
    }
  }
]
