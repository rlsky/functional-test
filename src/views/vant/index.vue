<template>
  <div id="vant">
    <goBack></goBack>
    <div class="bottom">
      <van-button type="primary">主要按钮</van-button>
      <!-- <van-tree-select
        items="{{ items }}"
        main-active-index="{{ mainActiveIndex }}"
        active-id="{{ activeId }}"
        bind:click-nav="onClickNav"
        bind:click-item="onClickItem"
      /> -->
    </div>
  </div>
</template>
<script>
import { Button, TreeSelect } from 'vant'
import goBack from 'components/goback'

export default {
  name: 'vant',
  components: {
    [Button.name]: Button,
    [TreeSelect.name]: TreeSelect,
    goBack
  },
  data() {
    return {
      mainActiveIndex: 0,
      activeId: null
    }
  },
  created() {},
  mounted() {
    this.showToast()
  },
  methods: {
    showToast() {
      this.$toast({
        message: '展示图片',
        icon: 'https://img.yzcdn.cn/vant/logo.png'
      })
    }
    // onClickNav({ detail = {} }) {
    //   this.setData({
    //     mainActiveIndex: detail.index || 0
    //   })
    // },

    // onClickItem({ detail = {} }) {
    //   const activeId = this.data.activeId === detail.id ? null : detail.id

    //   this.setData({ activeId })
    // }
  }
}
</script>
<style lang="scss" scoped>
#vant {
  .bottom {
    margin-top: 38px;
  }
}
</style>
