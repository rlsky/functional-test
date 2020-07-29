<template>
  <div id="home">
    <h1>测试页</h1>
    <div class="skip">
      <button @click="toWaterfallFlow">瀑布流</button>
      <button @click="toVant">Vant</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toWaterfallFlow() {
      this.$router.push("/waterfallFlow");
    },
    toVant() {
      this.$router.push("/vant");
    },
  },
};
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  height: 100%;
  background: seagreen;
  h1 {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 10%;
    font-size: 30px;
    color: sandybrown;
  }
  .skip {
    width: 100%;
    height: 100px;
    padding: 0 20px;
    position: absolute;
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: space-around;
  }
}
</style>
