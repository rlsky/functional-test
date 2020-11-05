<template>
  <div id="home">
    <h1>测试页</h1>
    <div class="skip">
      <button @click="toWaterfallFlow">瀑布流</button>
      <button @click="toVant" title="Vant">Vant</button>
      <button @click="toVuex" title="Vuex">Vuex</button>
      <button @click="toCallKeyboard" title="call-Keyboard">
        call-Keyboard
      </button>
      <button @click="toNextTick" title="NextTick">NextTick</button>
      <button @click="toLyTab" title="ly-Tab">ly-Tab</button>
      <button @click="toCanvasPage" title="canvas-Page">canvas-Page</button>
      <button @click="toScrollOption" title="ScrollOption">ScrollOption</button>
      <button @click="toComponentMerge" title="ComponentMerge">
        ComponentMerge
      </button>
      <button @click="toLoading" title="loading">loading</button>
      <button @click="toAbc" title="applyBindCall">applyBindCall</button>
      <button @click="toCityList" title="cityList">cityList</button>
      <button @click="toJsInterview" title="cityList">jsInterview</button>
      <button @click="toswiperView" title="cityList">swiper-View</button>
      <button @click="toface" title="cityList">face</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    toWaterfallFlow() {
      this.$router.push('/waterfallFlow')
    },
    toVant() {
      this.$router.push('/vant')
    },
    toVuex() {
      this.$router.push('/vuex')
    },
    toCallKeyboard() {
      this.$router.push('/callKeyboard')
    },
    toNextTick() {
      this.$router.push('/nextTick')
    },
    toLyTab() {
      this.$router.push('/lyTab')
    },
    toCanvasPage() {
      this.$router.push('/canvas-Page')
    },
    toScrollOption() {
      this.$router.push('/scrollOption')
    },
    toComponentMerge() {
      this.$router.push('/componentMerge')
    },
    toLoading() {
      this.$router.push('/loading')
    },
    toAbc() {
      this.$router.push('/abc')
    },
    toCityList() {
      this.$router.push('/cityList')
    },
    toJsInterview() {
      this.$router.push('/jsInterview')
    },
    toswiperView() {
      this.$router.push('/swiperView')
    },
    toface() {
      this.$router.push('/face')
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  height: 100%;
  background: url('./image/001.jpg');
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
    button {
      height: 20px;
      width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
