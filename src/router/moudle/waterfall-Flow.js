const WaterfallFlow = () => import('views/waterfall-Flow/index.vue')

export default [
  {
    path: '/waterfallFlow',
    name: 'waterfallFlow',
    component: WaterfallFlow,
    meta: {
      title: 'WaterfallFlow'
    }
  }
]
