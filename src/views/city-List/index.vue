<template>
  <div id="city-List">
    <!-- 定位城市 -->
    <div class="location">
      <div class="current">
        <span>当前城市/GPS定位</span>
      </div>
      <div class="location-Item">
        <div class="only">
          <img src="./image/position.png" />
          <span>北京</span>
        </div>
      </div>
    </div>
    <!-- 热门城市 -->
    <div class="hot">
      <div class="hot-Title" :id="'link' + hotCity">
        <span>{{ hotCity }}</span>
      </div>
      <div class="hot-citys">
        <ul class="hot-List">
          <li class="hot-Item" v-for="(item, index) in hotCities" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 城市列表 -->
    <div class="city-Info-Wrap">
      <div class="city-Info" v-for="(item, index) in cityList" :key="index">
        <div :id="'link' + item.title" class="letter" :ref="item.title">
          {{ item.title }}
        </div>
        <div class="list" v-for="(listItem, index) in item.lists" :key="index">
          {{ listItem }}
        </div>
      </div>
    </div>
    <!-- 定位追踪 -->
    <div class="alphabet-wrap">
      <ul>
        <li @click="toClickCity">{{ hotCity }}</li>
        <li v-for="(item, index) in cityList" :key="index" @click="toClickCity">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <!-- 置顶按钮 -->
    <transition name="top">
      <div class="toTop" v-if="isTop" @click="toPageTop">
        <img src="./image/fanhuidingbu.png" />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "cityList",
  data() {
    return {
      hotCity: "", // 热门城市
      hotCities: [], //热门城市列表
      cityList: [], // 城市列表
      options: {
        enableHighAccuracy: true, // 是否使用高精度定位
        timeout: 5000, //它代表机器能够等待方法返回位置的最长时间（单位是毫秒）
        // 单位为毫秒，用来告诉浏览器是否使用最近缓存的位置数据，如果在maximumAge内有一个请求，将会返回它，而不请求新位置。
        // maximumAge如果为Infinity，则总是使用一个缓存的位置，如果为0则必须在每次请求时查找一个新位置(默认值为0)
        maximumAge: 0,
      },
      isTop: false, // 是否展现指定按钮
      bTop: "", // 元素B的位置
    };
  },
  created() {
    this.getCityInfo(); // 获取城市内容
    this.getLocation(); // 获取定位
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.$nextTick(() => {
      setTimeout(() => {
        this.getBTop();
      }, 200);
    });
  },
  methods: {
    //获取B的位置
    getBTop() {
      this.bTop = this.$refs.B[0].offsetTop;
    },
    //请求城市数据
    async getCityInfo() {
      const res = await this.$http.get("http://localhost:3001/api/lists");
      const { city, recommend } = res.data;
      this.hotCities = recommend[0].lists;
      this.cityList = city;
      this.hotCity = recommend[0].title;
    },
    // 点击字母跳对应位置
    toClickCity(e) {
      const clickLetter = "#link" + e.target.innerText;
      const anchor = this.$el.querySelector(clickLetter);
      scrollTo(0, anchor.offsetTop);
    },
    // 实现定位,目前无法定位原因是协议不是https,而是http
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.options
      );
    },
    success(pos) {
      console.log(pos);
    },
    error(err) {
      console.log(err);
    },
    // 是否显示置顶按钮
    scrollToTop() {
      if (document.documentElement.scrollTop > this.bTop) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    // 点击置顶
    toPageTop() {
      scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
#city-List {
  height: 100%;
  width: 100%;
  .hot {
    padding: 10px 45px 0 15px;
    .hot-Title {
      height: 20px;
      padding-bottom: 12px;
      box-sizing: content-box;
      span {
        color: #8f8f8f;
        font-size: 14px;
      }
    }
    .hot-citys {
      height: 180px;
      .hot-List {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        &::after {
          content: "";
          width: 96px;
        }
        .hot-Item {
          height: 40px;
          width: 96px;
          background: #f2f2f2;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }
  .city-Info-Wrap {
    .city-Info {
      .letter {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        background: #f5f5f5;
        color: #8f8f8f;
        padding: 0 16px;
      }
      .list {
        color: #333;
        // padding: 12px 0 9px;
        border-bottom: 1px solid #d5d6d7;
        font-size: 16px;
        font-weight: 400;
        padding: 12px 16px 9px 16px;
        color: #333;
      }
    }
  }
  .alphabet-wrap {
    position: fixed;
    width: 30px;
    height: 100vh;
    right: 0;
    top: 0;
    ul {
      position: absolute;
      width: 30px;
      top: 50%;
      transform: translateY(-50%);
      li {
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        color: #3c7ef6;
        margin-bottom: 2px;
      }
    }
  }
  .toTop {
    height: 38px;
    width: 38px;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    bottom: 34px;
    right: 22px;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    img {
      height: 24px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .location {
    padding: 10px 15px 0 15px;
    .current {
      padding-bottom: 12px;
      height: 20px;
      font-size: 14px;
      color: #8f8f8f;
      box-sizing: content-box;
    }
    .location-Item {
      height: 60px;
      .only {
        background: #f2f2f2;
        height: 40px;
        width: 96px;
        border-radius: 4px;
        display: flex;
        margin-bottom: 20px;
        justify-content: center;
        align-items: center;
        img {
          height: 15px;
          width: 13px;
        }
        span {
          margin-left: 4px;
        }
      }
    }
  }
  .top-enter-active,
  .top-leave-active {
    transition: opacity 0.5s;
  }
  .top-enter,
  .top-leave-active {
    opacity: 0;
  }
}
</style>
