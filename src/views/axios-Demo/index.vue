<template>
  <div>

    <!-- 电影院轮播html -->
    <!-- <swiper :options="options">
      <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <img :src="item.image" />
      </swiper-slide>
    </swiper> -->
    <!-- 竖向轮播html -->
    <div class="wrrap" v-if="bannerList != false">
      <div class="wrap" v-if="bannerList.length>2">
        <swiper :options="options">
          <swiper-slide v-for="(item,index) in bannerList" :key="index">
            <img :src="item.image" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="ling" v-if="bannerList.length<=2">
        <div v-if="bannerList.length<=1">
          <img :src="bannerList && bannerList[0] && bannerList[0].image" />
        </div>
        <div v-if="bannerList.length==2">
          <img class="oneimg" :src="bannerList && bannerList[0] && bannerList[0].image" />
          <img :src="bannerList && bannerList[1] && bannerList[1].image" />
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      bannerList:[],
      bannerList2:[],
      // 电影院轮播配置
      // options: {
      //   slidesPerView: 4, // 页面同时可以展示的轮播数量
      //   centeredSlides: true, // 轮播居中 (默认轮播是靠左的)
      //   loop: false, // 禁止轮播循环
      //   touchRatio: 1, // 触摸比例。触摸距离与slide滑动距离的比率。默认为1，按照1:1的触摸比例滑动。设置为0时，完全无法滑动
      //   spaceBetween: 0, // 轮播图之间的距离
      //   slideToClickedSlide: true // 设置为true则点击某个轮播会过渡到这个轮播。不然只能滑动到下一个轮播
      // }
      // 竖向轮播
      options:{
        direction:'vertical',
        autoplay: {
          disableOnInteraction: false,
          delay:3000
        },
        loop:true,
        slidesPerView: 2,
        slidesPerGroup : 2
      }
    }
  },
  computed:{},
  mounted() {
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(
      res=>{
        this.bannerList=res.data.data.banner.list.slice(0,4)
      }
    )
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
// 竖向轮播css
.wrap{
  height: 200px;
}
.swiper-container{
  height: 100%;
}
.swiper-wrapper{
  height: 100%;
}
.swiper-slide{
  img{
    height: 90px;
    width: 100%;
    display: block;
    border-radius: 10px;
  }
  .oneimg{
    margin-bottom: 20px;
  }
}
.ling{
  min-height: 100px;
  img{
    height: 90px;
    width: 100%;
    display: block;
    border-radius: 10px;
  }
  .oneimg{
    margin-bottom: 20px;
  }
}
// 电影院轮播css
// .swiper-slide {
//   img {
//     width: 100%;
//     height: 100%;
//     background: red;
//   }
// }
// //:not() 用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。
// // swiper-slide 的元素中,排除掉swiper-slide-active元素,其他的都加上过渡、缩放、y轴移动
// .swiper-slide:not(.swiper-slide-active) { 
//   transition: 400ms;
//   transform: scale(0.8335) translateY(20px);
// }
</style>

