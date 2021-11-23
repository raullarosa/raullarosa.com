<template>
  <div id="cursor" :style="styleObject" v-show="showCursor">
  </div>
</template>

<script>
export default {
  mounted() {
    this.interval = setInterval(() => {
      this.showCursor = !this.showCursor
    }, 500)
  },
  unmounted() {
    clearInterval(this.interval)
  },
  data() {
    return {
      showCursor: false
    }
  },
  computed: {
    styleObject() {
      return {
        width: "10px",
        height: "100%",
        "background-color": "white"
      }
    }
  }
}
</script>

<style>

</style>