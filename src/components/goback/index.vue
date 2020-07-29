<template>
  <div class="goBack">
    <span @click="goBack">&lt;</span>
  </div>
</template>
<script>
export default {
  name: "goBack",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.goBack {
  background: cornsilk;
  height: 38px;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  span {
    display: block;
    height: 100%;
    width: 30px;
    line-height: 38px;
    font-weight: 700;
    text-align: center;
  }
}
</style>
