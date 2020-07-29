<template>
  <div id="vant">
    <goBack></goBack>
    <div class="bottom">
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
import goBack from "components/goback";

export default {
  name: "vant",
  components: {
    [Button.name]: Button,
    goBack,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.showToast();
  },
  methods: {
    showToast() {
      this.$toast({
        message: "展示图片",
        icon: "https://img.yzcdn.cn/vant/logo.png",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#vant {
  .bottom {
    margin-top: 38px;
  }
}
</style>
