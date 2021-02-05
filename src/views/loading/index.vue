<template>
  <div id="loading">
    loading
    <button @click="toLogin">点击登录</button>
    <bouncingLoader></bouncingLoader>
  </div>
</template>
<script>
import bouncingLoader from '../../components/bouncing-loader'

export default {
  name: 'Loading',
  components: { bouncingLoader },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {
      sessionStorage.setItem('token', 'fbksbflkdsnfjkbob1231241')
      this.$router.replace(this.$route.query.redirect)
    }
  }
}
</script>
<style lang="scss" scoped></style>
