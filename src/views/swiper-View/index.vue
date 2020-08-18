<template>
  <div id="swiperView">
    swiperView
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="item1">111</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item2">222</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item3">333</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item1">111</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item2">222</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item3">333</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swiperView',
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        freeMode: true,
        direction: 'vertical',
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
.swiper-container {
  height: 180px;
}
.swiper-slide {
  height: 90px;
  /* border-bottom: 10px solid gray; */
  /* box-sizing: border-box; */
}
.item1 {
  height: 90px;
  width: 100%;
  background: red;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
}
.item2 {
  height: 90px;
  width: 100%;
  background: green;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
}
.item3 {
  height: 90px;
  width: 100%;
  background: cadetblue;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
}
</style>
