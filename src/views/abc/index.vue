<template>
  <div id="abc">
    <h1 class="title">this指向</h1>
    <p>对象中的函数this指向的是对象</p>
    <p>call()、apply()、bind()() 都是用来重新定义函数this指向的</p>
    <h1 class="title">用法</h1>
    <p>
      1. 函数.call(新的this指向) 、 2. 函数.apply(新的this指向) 、 3.
      函数.bind(新的this指向)()
    </p>
    <h1 class="title">区别</h1>
    <p>
      1.
      bind返回的是一个新的函数，你必须调用它才会被执行。而call和apply是直接调用函数。
    </p>
    <p>
      2. call 、bind 、 apply 这三个函数的第一个参数都是 this
      的指向对象，第二个参数差别就来了：
    </p>
    <p>
      （1）call 的参数是直接放进去的，第二第三第 n
      个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string'
      )。
    </p>
    <p>
      （2）apply 的所有参数都必须放在一个数组里面传进去
      obj.myFun.apply(db,['成都', ..., 'string' ])。
    </p>
    <p>（3）bind 除了返回是函数以外，它 的参数和 call 一样。</p>
    <p>
      当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object
      等等！
    </p>
  </div>
</template>
<script>
export default {
  name: 'Abc',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#abc {
  .title {
    font-size: 20px;
    margin-bottom: 6px;
  }
  p {
    font-size: 14px;
    color: blueviolet;
    margin-bottom: 26px;
  }
}
</style>
