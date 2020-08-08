<template>
  <div id="component-Merge">
    <div class="topFixed">
      <goBack></goBack>
      <lyTab class="lyTabCon"></lyTab>
    </div>
    <scrollOption class="bottomCon"></scrollOption>
  </div>
</template>
<script>
import lyTab from "../ly-Tab";
import scrollOption from "../scroll-Option";
import goBack from "../../components/goback";

export default {
  name: "componentMerge",
  components: { lyTab, scrollOption, goBack },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#component-Merge {
  overflow: hidden;
  height: 100%;
  .topFixed {
    position: fixed;
    top: 0;
    z-index: 99;
    height: 88px;
    .lyTabCon {
      position: relative;
      top: 38px;
    }
  }
  .bottomCon {
    margin-top: 88px;
    height: calc(100%-88px);
  }
}
</style>
