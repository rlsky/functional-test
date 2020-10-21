<template>
  <div id="vuex">
    vuex
    <van-button type="primary" @click="toCommit">触发commit</van-button>
  </div>
</template>
<script>
import { Button } from 'vant'
import { mapState } from 'vuex'

export default {
  name: 'Vuex',
  components: {
    [Button.name]: Button
  },
  data() {
    return {}
  },
  computed: {
    ...mapState['count']
  },
  created() {
    console.log(this.count)
  },
  mounted() {
    console.log(this.$store.state.count)
  },
  methods: {
    toCommit() {
      this.$store.dispatch('increment')
      console.log(this.$store.state.count)
      sessionStorage.setItem('count', JSON.stringify(this.$store.state.count))
    }
  }
}
</script>
<style></style>
