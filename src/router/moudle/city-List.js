const cityList = () => import('views/city-List/index.vue')

export default [
  {
    path: '/cityList',
    name: 'cityList',
    component: cityList,
    meta: {
      title: 'cityList'
    }
  }
]
