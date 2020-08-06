<template>
  <div id="ly-tab-wrap">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      :change="selectChange()"
    >
    </ly-tab>
    <div class="js-Vue-Tab-Wrap">
      <div class="js-Vue-Tab">
        <ul class="tab-List" @cllick="listclick" ref="tabList">
          <li
            class="tab-Item"
            @click="itemTouch($event, item.id)"
            v-for="item in jsItems"
            :key="item.id"
            :class="{ activeItem: item.id == isActive }"
          >
            {{ item.txt }}
          </li>
          <li class="tab-Line" ref="tabLine"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    selectChange() {
      console.log(this.selectedId);
    },
    listclick(e) {
      console.log(e, "111");
    },
    itemTouch(e, id) {
      this.isActive = id;
      let targetW = e.target.offsetWidth / 2;
      let LineW = this.$refs.tabLine.offsetWidth / 2;
      let X = e.target.offsetLeft + targetW - LineW + "px";
      if (e.target.offsetLeft > 220) {
        console.log("大于220了");
        this.$refs.tabList.scrollLeft = 100;
      }
      this.$refs.tabLine.style.transform = `translateX( ${X} )`;
    },
  },
  // ly-tab插件git地址 https://github.com/ScoutYin/ly-tab
  data() {
    return {
      isActive: 0,
      selectedId: 0,
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
    width: 300px;
    display: inline-block;
    background: burlywood;
    .js-Vue-Tab {
      height: 100%;
      width: 100%;
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
          background: bisque;
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
          width: 22.8px;
          height: 3px;
          background: rgb(29, 152, 189);
          border-radius: 4px;
          transition: all 0.5s;
        }
      }
    }
  }
}
</style>
