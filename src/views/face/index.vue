<template>
  <div>
    <div>
      路由:{{ $route.params.id }}---props:{{ id }}----{{ woqu }}----{{
        duixaing
      }}
    </div>
    <router-link to="/face/123/qiantaoOne?q=vue">嵌套1</router-link>
    <router-link to="/face/123/qiantaoTwo">嵌套2</router-link>

    <router-view></router-view>
    <transition :name="transitionName">
      <router-view name="a"></router-view>
    </transition>
    <router-view name="b"></router-view>
    <van-button @click="tohome" type="primary">跳转</van-button>
    <button @click="outLogin">退出登录</button>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  props: {
    id: {
      type: String
    },
    woqu: {
      type: String
    },
    duixaing: {
      type: String
    }
  },
  data() {
    return {
      a: 1000,
      b: 2000,
      setFlag: null,
      transitionName: 'slide-right'
    }
  },
  created() {
    // console.log(this.)
    this.mySetInterVal(this.fn, this.a, this.b)
  },
  destroyed() {
    clearInterval(this.setFlag)
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      'face组件进入守卫:' + '去哪里-->' + to.path,
      ',来自哪里--->' + from.path
    )
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      'face组件更新守卫:' + '更新后 -->' + to.path,
      ',更新前--->' + from.path
    )
    next()
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log(
      'face组件离开守卫:' + '去哪里-->' + to.path,
      ',离开哪里--->' + from.path
    )
    next()
  },
  watch: {
    $route(to, from) {
      console.log(
        'watch监听路由改变:' + '去哪里--->' + to.path + '来自--->' + from.path
      )
      // const toDepth = to.path
      // const fromDepth = from.path
      // console.log(toDepth,fromDepth)
      // this.transitionName = toDepth === fromDepth ? 'slide-right' : 'slide-right'
    }
    // 对路由变化作出响应...
  },
  mounted() {},
  methods: {
    outLogin() {
      sessionStorage.removeItem('token')
      this.$router.replace(`/home`)
    },
    mySetInterVal(fn, a) {
      this.setFlag = setInterval(() => {
        fn()
      }, a)
    },
    fn() {
      // console.log('111111')
    },
    tohome() {
      // this.$router.push('home')
      // this.$router.push({
      //   path:'home'
      // })
      // this.$router.push({
      //   path:'/cityList',
      //   query:{
      //     shenme:'111'
      //   }
      // })
      // var userId='111'
      this.$router.push(`/face/111`)
    }
  }
}
</script>
<style lang="scss" scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s;
}
.slide-right-enter, .slide-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
