<template>
  <div id="terminal" v-bind:style="styleObject">
    <feed />
    <prompt />
  </div>
</template>

<script>
import Feed from './Feed.vue';
import Prompt from './Prompt.vue';
export default {
  components: { Feed, Prompt },
  date() {
    return {
      commandInput: ""
    }
  },
  computed: {
    styleObject() {
      return {
        "display": "flex",
        "flex-direction": "column",
        "padding": "1rem",
        "height": "calc(100vh - 2rem)",
        "background-color": "#2c3e50"
      }
    }
  }
};
</script>

<style>
</style>