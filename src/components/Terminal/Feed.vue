<template>
  <div id="feed">
    {{ commandList }}
  </div>
</template>

<script>
export default {
  props: ['commandList'],
  emits: ['submitCommand'],
  mounted() {
    setTimeout(() => {
      this.$emit("submitCommand", "portfolio", true)
    }, 1000)
  },
};
</script>

<style>
</style>