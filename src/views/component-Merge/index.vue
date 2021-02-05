<template>
  <div id="component-Merge">
    <div class="topFixed">
      <goBack></goBack>
      <lyTab class="lyTabCon" :jsItems="jsItems"></lyTab>
    </div>
    <scrollOption class="bottomCon"></scrollOption>
  </div>
</template>
<script>
import lyTab from '../ly-Tab'
import scrollOption from '../scroll-Option'
import goBack from '../../components/goback'

export default {
  name: 'componentMerge',
  components: { lyTab, scrollOption, goBack },
  data() {
    return {
      jsItems: [
        { txt: '首页', id: 0 },
        { txt: '推荐', id: 1 },
        { txt: 'Android', id: 2 },
        { txt: '前端', id: 3 },
        { txt: '后端', id: 4 },
        { txt: 'iOS', id: 5 },
        { txt: '产品', id: 6 },
        { txt: '人工智能', id: 7 },
        { txt: '设计', id: 8 },
        { txt: '设计1', id: 9 }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
#component-Merge {
  overflow: hidden;
  height: 100%;
  width: 100%;
  .topFixed {
    position: fixed;
    top: 0;
    z-index: 99;
    height: 88px;
    width: 100%;
    .lyTabCon {
      position: absolute;
      top: 38px;
      width: 100%;
    }
  }
  .bottomCon {
    margin-top: 88px;
    height: calc(100%-88px);
  }
}
</style>
