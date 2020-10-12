<template>
  <div>
    <div @click="toclick">js</div>
    <div class="Tremble" @touchmove="move2">
      函数防抖{{ num }}
      <div></div>
    </div>
    <input @input="enter" type="text" placeholder="函数节流" />
    <span
      v-for="(name, i) in couponNameList"
      v-show="commission ? i < 1 : i < 2"
      :key="i"
    >
      <i>&nbsp;{{ name }}&nbsp;</i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'jsInterview',
  data() {
    return {
      urlLink: '',
      num: 1,
      timeoutId: null,
      enterId: false,
      couponNameList: ['满100减10', '满200减20'],
      commission: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    toclick() {
      setTimeout(() => {
        window.location.href = this.urlLink
        // alert(window.location.href)
        window.location.reload()
      }, 100)
      this.urlLink = `http://10.7.0.212:3001/#/home`
      if (this.urlLink.indexOf('?') > 0) {
        this.urlLink +=
          '&t=' + new Date().getTime() + 's' + this.getRandom(1000, 9999)
      } else {
        this.urlLink +=
          '?t=' + new Date().getTime() + 's' + this.getRandom(1000, 9999)
      }
    },
    // 获取随机数的函数
    getRandom(start, end, fixed = 0) {
      let differ = end - start
      let random = Math.random()
      return (start + differ * random).toFixed(fixed)
    },
    // 函数防抖
    move2() {
      console.log('1111')
      let that = this
      this.timeoutId && clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        that.num = ++that.num
      }, 1000)
    },
    sendAjax() {
      console.log('发送ajax请求')
    },
    // 函数节流
    enter() {
      if (this.enterId) {
        return
      }
      this.enterId = true
      setTimeout(() => {
        this.sendAjax()
        this.enterId = false
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.Tremble {
  height: 400px;
  width: 100%;
  background: grey;
}
</style>
