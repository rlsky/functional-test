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
    <div>{{ wocao | guolv }}</div>
    <input type="text" @keyup.media-play-pause="method" />
    <span
      v-for="(value, index) in couponNameList2"
      :key="'info' + index"
      @click="toAdd"
    >
      {{ value }}
    </span>
    <div>
      <div class="btn-One">
        按钮111
      </div>
      <div
        class="btn-Two"
        @click="toTouchS(count)"
        :ref="'btnTwo' + count"
        v-for="count in 10"
        :key="count"
      >
        按钮{{ count }}
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {showMsg} from 'npmbap'
export default {
  filters: {
    guolv(item) {
      return item + '1'
    }
  },
  name: 'jsInterview',
  data() {
    return {
      urlLink: '',
      num: 1,
      timeoutId: null,
      enterId: false,
      couponNameList: ['满100减10', '满200减20'],
      couponNameList2: ['满100减10', '满200减20'],
      commission: '',
      wocao: 123
    }
  },
  created() {
    showMsg()
  },
  mounted() {
    console.log(this.couponNameList.join(''))
    // this.couponNameList2[2] = '满300减30'
    // console.log(this.couponNameList2)
    // this.$set(this.couponNameList2, 2, '满300减30')
  },
  methods: {
    toTouchS() {
      console.log(this.$refs)
    },
    // toTouchE() {
    //   this.$refs.btnTwo.style.background = 'green'
    // },
    toAdd() {
      // this.couponNameList2[2] = '满300减30'
      /**
       * this.$set和vue.set没有区别,两个是一样的,只是将vue下的set功能移植到了vue的原型上,所以this.$set也可以使用
       */
      Vue.set(this.couponNameList2, 2, '满300减30')
      this.$set(this.couponNameList2, 3, '满400减40')
      // console.log(Vue)
      console.log(this.couponNameList2)
    },
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
.btn-One {
  background: red;
  &:hover {
    background: green;
  }
}
.btn-Two {
  height: 100px;
}
</style>
