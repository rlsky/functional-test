<template>
  <div id="loading">
    loading
    <bouncingLoader></bouncingLoader>
  </div>
</template>
<script>
import bouncingLoader from "../../components/bouncing-loader";

export default {
  name: "Loading",
  components: { bouncingLoader },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
