<template>
  <div id="nextTick">
    <div ref="msgDiv">{{ msg }}</div>

    <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>

    <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>

    <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>

    <button @click="changeMsg">Change the Message</button>
  </div>
</template>
<script>
export default {
  name: "nextTick",
  data() {
    return {
      msg: "Hello Vue.",
      msg1: "",
      msg2: "",
      msg3: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeMsg() {

      // 1.修改数据
      this.msg = "Hello world.";

      // 2.DOM 还没有更新就把dom上得内容给了msg1
      this.msg1 = this.$refs.msgDiv.innerHTML;
      
      this.$nextTick(() => {
      // 3.DOM 更新后把dom上的内容给了msg2
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });

      // 4.DOM 还没有更新就把dom上得内容给了msg3
      this.msg3 = this.$refs.msgDiv.innerHTML;

      //5.总结:this.$nextTick是在下次 DOM 更新结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
      //      其实就是获取视图更新之后的DOM节点
      // 一、在created生命周期中进行DOM操作
        // 在mounted生命周期才完成渲染挂载，所以在created生命周期是访问不到DOM节点的，如果要在created生命周期操作DOM要在this.$nextTick的回调函数中执行。

        // 1、在created请求完数据后，操作DOM元素渲染Echarts图表

        // 二、在更改数据后，进行节点的DOM操作
        // 修改文本内容，修改节点样式，增删改查等等。
        // 比如用一个数组循环渲染一个列表，在你给数组赋值后，立刻操作列表的某一项，而此时还没有这个节点，所以要在this.$nextTick的回调函数中执行。

        // 1、当在watch中监听弹窗的开关变量，当值为真时，操作弹窗内的DOM元素。此时弹窗还没有渲染完成，所以DOM操作应该放在$nextTick中

        // 2、当弹窗打开后，在弹窗内的一些操作完成后，假如要关闭弹窗，弹窗内的一些操作应该放在$nextTick中（比如路由跳转）

        // 3、面包屑导航，也就是路由跳转，假如点击了面包屑，此时做了一些额外的操作，这些操作应该放在$nextTick中（比如路由跳转，为变量赋值等）

        // 4、图片上传成功后的操作，这些操作应该放在$nextTick中（比如为变量赋值）

    },
  },
};
</script>
<style lang="scss" scoped></style>