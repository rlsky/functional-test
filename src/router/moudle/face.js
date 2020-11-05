const Face = () => import('views/face/index.vue')

export default [
  {
    path: '/face',
    name: 'face',
    component: Face,
    meta: {
      title: 'face'
    }
  }
]
