<template>
  <div id="home">
    <h1>测试页</h1>
    <div class="skip">
      <button @click="toWaterfallFlow">瀑布流</button>
      <button @click="toVant">Vant</button>
      <button @click="toVuex">Vuex</button>
      <button @click="toCallKeyboard">call-Keyboard</button>
      <button @click="toNextTick">NextTick</button>
      <button @click="toLyTab">ly-Tab</button>
      <button @click="toCanvasPage">canvas-Page</button>
      <button @click="toScrollOption">ScrollOption</button>
      <button @click="toComponentMerge">ComponentMerge</button>
      <button @click="toLoading">loading</button>
      <button @click="toAbc">applyBindCall</button>
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
    toVuex() {
      this.$router.push("/vuex");
    },
    toCallKeyboard() {
      this.$router.push("/callKeyboard");
    },
    toNextTick() {
      this.$router.push("/nextTick");
    },
    toLyTab() {
      this.$router.push("/lyTab");
    },
    toCanvasPage() {
      this.$router.push("/canvas-Page");
    },
    toScrollOption() {
      this.$router.push("/scrollOption");
    },
    toComponentMerge() {
      this.$router.push("/componentMerge");
    },
    toLoading() {
      this.$router.push("/loading");
    },
    toAbc() {
      this.$router.push("/abc");
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
