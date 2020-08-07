<template>
  <div id="ly-tab-wrap">
    <div class="js-Vue-Tab-Wrap">
      <div class="js-Vue-Tab">
        <ul class="tab-List" ref="tabList">
          <li
            class="tab-Item"
            @click="itemTouch($event, item.id)"
            v-for="item in jsItems"
            :key="item.id"
            :class="{ activeItem: item.id == isActive }"
            ref="tabItem"
          >
            {{ item.txt }}
          </li>
          <li class="tab-Line" ref="tabLine"></li>
        </ul>
      </div>
    </div>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      :change="selectChange()"
    >
    </ly-tab>
    <div class="classify-Wrap">
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
      <div class="classify-Line">
        <div class="transition-Line-Wrap">
          <div class="Line" ref="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.isFirstIn();
  },
  methods: {
    scrollEvent(e) {
      console.log(e.target.scrollLeft);
      let left = (e.target.scrollLeft / 275) * 90 + "px";
      console.log(left);
      this.$nextTick(() => {
        // console.log(this.$refs.line);
        this.$refs.line.style.left = left;
      });
    },
    // 首次进入页面,tabline的位置定位
    isFirstIn() {
      this.$refs.tabLine.style.width = `22.8px`;
      let FirstTargetW = this.$refs.tabItem[0].offsetWidth / 2;
      let X = FirstTargetW - 11 + "px";
      this.$refs.tabLine.style.transform = `translateX( ${X} )`;
    },
    selectChange() {
      console.log(this.selectedId);
    },
    // 每次点击tab,根据点击的tabitem移动tab
    itemTouch(e, id) {
      // 点击左侧时
      if (
        this.RelativeParentLeft > e.target.offsetLeft &&
        e.target.getBoundingClientRect().left < 150
      ) {
        this.$refs.tabList.scrollTo({
          left: e.target.offsetLeft - 160,
          behavior: "smooth",
        });
      } else {
        // 点击右侧时
        if (
          e.target.getBoundingClientRect().left + e.target.offsetWidth >
          200
        ) {
          this.$refs.tabList.scrollTo({
            left: e.target.offsetLeft - 155,
            behavior: "smooth",
          });
        }
      }
      this.RelativeParentLeft = e.target.offsetLeft;

      this.isActive = id;
      let targetW = e.target.offsetWidth / 2;
      let LineW = this.$refs.tabLine.offsetWidth / 2;
      let X = this.RelativeParentLeft + targetW - LineW + "px";
      this.$refs.tabLine.style.transform = `translateX( ${X} )`;
    },
  },
  // ly-tab插件git地址 https://github.com/ScoutYin/ly-tab
  data() {
    return {
      RelativeParentLeft: 0,
      isActive: 0,
      selectedId: 0,
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
      ],
      items: [
        { label: "首页" },
        { label: "推荐" },
        { label: "Android" },
        { label: "前端" },
        { label: "后端" },
        { label: "iOS" },
        { label: "产品" },
        { label: "人工智能" },
        { label: "设计" },
      ],
      options: {
        activeColor: "#1d98bd",
      },
      jsItems: [
        { txt: "首页", id: 0 },
        { txt: "推荐", id: 1 },
        { txt: "Android", id: 2 },
        { txt: "前端", id: 3 },
        { txt: "后端", id: 4 },
        { txt: "iOS", id: 5 },
        { txt: "产品", id: 6 },
        { txt: "人工智能", id: 7 },
        { txt: "设计", id: 8 },
        { txt: "设计1", id: 9 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#ly-tab-wrap {
  height: 100%;
  width: 100%;
  .js-Vue-Tab-Wrap {
    height: 48px;
    width: 100%;
    display: inline-block;
    margin-bottom: 100px;
    .js-Vue-Tab {
      height: 100%;
      width: 100%;
      border-bottom: 1px solid #eee;
      box-shadow: 0 0px 6px 1px #eee;
      background-color: rgba(255, 255, 255, 0.8);
      .tab-List {
        height: 100%;
        width: 100%;
        display: flex;
        overflow-y: auto;
        position: relative;
        &::-webkit-scrollbar {
          display: none;
        }
        .tab-Item {
          padding: 0 11px;
          white-space: nowrap;
          font-size: 14px;
          line-height: 48px;
        }
        .activeItem {
          color: rgb(29, 152, 189);
        }
        .tab-Line {
          position: absolute;
          left: 0;
          bottom: 3px;
          width: 0px;
          height: 2px;
          background: rgb(29, 152, 189);
          border-radius: 4px;
          transition: all 0.5s;
        }
      }
    }
  }
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
      background: chartreuse;
      height: 20px;
      width: 100%;
      .transition-Line-Wrap {
        height: 8px;
        width: 100px;
        background: chocolate;
        border-radius: 6px;
        position: relative;
        .Line {
          position: absolute;
          left: 0;
          height: 8px;
          width: 20px;
          background: red;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
