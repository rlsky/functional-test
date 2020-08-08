<template>
  <div class="canvasPage">
    <h1>canvasPage</h1>
    <canvas id="tutorial" width="300" height="300"
      >你的浏览器不支持 canvas，请升级你的浏览器。</canvas
    >
  </div>
</template>
<script>
export default {
  name: "canvasPage",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      console.log("初始化canvas");
      let canvas = document.getElementById("tutorial");
      if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 60);
        ctx.lineTo(100, 100);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(200, 200, 10, 0, Math.PI / 2, false);
        ctx.stroke();
      } else {
        console.log("不支持cavas");
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
