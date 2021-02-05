const canvasPage = () => import('views/canvas-Page/index.vue')

export default [
  {
    path: '/canvas-Page',
    name: 'canvas-Page',
    component: canvasPage,
    meta: {
      title: 'canvas-Page'
    }
  }
]
