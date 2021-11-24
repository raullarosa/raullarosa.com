<template>
  <div id="terminal" ref="terminal" v-bind:style="styleObject">
    <feed
      :commandList="commandList"
      @submit-command="submitCommand"
      @click.prevent="updateFocus"
    />
    <prompt
      :clickedCommand="clickedCommand"
      :focusTimestamp="focusTimestamp"
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
      commandList: ["readme"],
      focusTimestamp: Date.now()
    }
  },
  computed: {
    styleObject() {
      return {
        "display": "flex",
        "flex-direction": "column",
        "padding": "1rem",
        "height": "calc(100vh - 2rem)",
        "background-color": "#2c3e50",
        "overflow-y": "scroll"
      }
    }
  },
  methods: {
    submitCommand(command, clicked = false) {
      if (clicked) this.clickedCommand = command
      else {
        this.commandList.push(command)

        // Timeout necessary to trigger
        setTimeout(() => {
          this.scrollToBottom()
        }, 50)
      }
    },
    scrollToBottom() {
      let terminal = this.$refs.terminal
      terminal.scrollTop = terminal.scrollHeight
    },
    updateFocus() {
      this.focusTimestamp = Date.now()

      // Timeout necessary to trigger
      setTimeout(() => {
        this.scrollToBottom()
      }, 50)
    }
  }
};
</script>

<style>
</style>