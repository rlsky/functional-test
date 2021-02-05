<template>
  <div id="call-Keyboard">
    <div>
      <input
        placeholder="type=number"
        type="number"
        @focus="tofocus"
        @blur="toblur"
      />
    </div>
    <div class="wocao" ref="wocaoRef">
      <button>哈哈</button>
      <div class="jianpan">键盘</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'callKeyboard',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    tofocus() {
      this.$refs.wocaoRef.style.bottom = '0px'
      this.$refs.wocaoRef.style.transition = 'all 0.5s'
    },
    toblur() {
      console.log('111')
      this.$refs.wocaoRef.style.bottom = '-101px'
    }
  }
}
</script>
<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.wocao {
  position: absolute;
  bottom: -101px;
  width: 100%;
  .jianpan {
    height: 100px;
    width: 100%;
    background: red;
  }
}
</style>
