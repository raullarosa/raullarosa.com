<template>
  <div id="terminal" v-bind:style="styleObject">
    <feed
      :commandList="commandList"
      @submit-command="submitCommand"
    />
    <prompt
      :clickedCommand="clickedCommand"
      @submit-command="submitCommand"
    />
  </div>
</template>

<script>
import Feed from './Feed.vue';
import Prompt from './Prompt.vue';
export default {
  components: { Feed, Prompt },
  data() {
    return {
      clickedCommand: "",
      commandList: ["readme"]
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
  },
  methods: {
    submitCommand(command, clicked = false) {
      if (clicked) this.clickedCommand = command
      else {
        this.commandList.push(command)
      }
    }
  }
};
</script>

<style>
</style>