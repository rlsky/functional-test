<template>
  <div id="vant">
    vant
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "vant",
  components: {
    [Button.name]: Button,
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
<style></style>
