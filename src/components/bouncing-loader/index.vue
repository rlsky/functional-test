<template>
  <div id="bouncing-loader">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
  </div>
</template>
<script>
export default {
  name: 'bouncingLoader',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#bouncing-loader {
  width: 100px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  .drop {
    height: 10px;
    width: 10px;
    background: #8385aa;
    border-radius: 50%;
    animation: dropjump 0.6s infinite alternate;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  @keyframes dropjump {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }
}
</style>
