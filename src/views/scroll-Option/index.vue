<template>
  <div id="scroll-Option">
    <div class="classify-Wrap" ref="classifyWrap">
      <div class="classify" @scroll="scrollEvent">
        <div
          class="classify-Item"
          v-for="(item, index) in classifyList"
          :key="index"
        >
          <div class="classify-Img">
            <img :src="item.imgUrl" alt="tu" />
          </div>
          <div class="classify-txt">
            <span>{{ item.txt }}</span>
          </div>
        </div>
      </div>
      <div class="classify-Line" v-if="isShowLine">
        <div class="transition-Line-Wrap" ref="lineWrap">
          <div class="Line" ref="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scrollOption",
  data() {
    return {
      isShowLine: false,
      classifyList: [
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
        {
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254336683,41826619&fm=26&gp=0.jpg",
          txt: "嘎嘎",
        },
      ],
    };
  },
  created() {},
  mounted() {
    // 判断是否需要下面的线
    this.isShowLine1();
  },
  methods: {
    isShowLine1() {
      if (this.classifyList.length > 12) {
        this.isShowLine = true;
      }
    },
    scrollEvent(e) {
      // 求面可滚动的总宽度
      let scrollWidth =
        e.target.scrollWidth - this.$refs.classifyWrap.offsetWidth;
      // 求线可滚动的总宽度
      let differenceLine =
        this.$refs.lineWrap.offsetWidth - this.$refs.line.offsetWidth;
      // 线应移动的距离/线可滚动的总距离=面移动的距离/面可滚动的总距离
      let left = (e.target.scrollLeft / scrollWidth) * differenceLine + "px";
      this.$nextTick(() => {
        this.$refs.line.style.left = left;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#scroll-Option {
  height: 100%;
  width: 100%;
  .classify-Wrap {
    height: 160px;
    background: aqua;
    padding: 6px 0;
    position: relative;
    .classify {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .classify-Item {
        display: inline-block;
        width: 50px;
        height: 70px;
        margin-right: 10px;
        .classify-Img {
          width: 50px;
          height: 50px;
          img {
            height: 100%;
            width: 70px;
            display: block;
            border-radius: 50%;
          }
        }
        .classify-txt {
          color: blue;
          text-align: center;
        }
      }
    }
    .classify-Line {
      position: absolute;
      bottom: -20px;
      background: aqua;
      height: 20px;
      width: 100%;
      .transition-Line-Wrap {
        height: 8px;
        width: 100px;
        background: chocolate;
        border-radius: 6px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .Line {
          position: absolute;
          left: 0;
          height: 8px;
          width: 20px;
          background: antiquewhite;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
