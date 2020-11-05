<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      a: 1000,
      b: 2000
    }
  },
  created() {
    this.mySetInterVal(this.fn, this.a, this.b)
  },
  mounted() {},
  methods: {
    mySetInterVal(fn, a, b) {
      console.log(b)
      setInterval(() => {
        fn()
      }, a)
    },
    fn() {
      console.log('111111')
    }
  }
}
</script>
<style></style>
