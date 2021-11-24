<template>
  <div id="feed">
    <div
      v-for="(command, index) in commandList"
      v-bind:key="index"
      class="width-machine command"
    >
      <span class="directory">raullarosa</span>
      <span>{{ command }}</span>
    </div>
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
#feed {

}
.command {
  margin-bottom: 0.5rem;
}
</style>