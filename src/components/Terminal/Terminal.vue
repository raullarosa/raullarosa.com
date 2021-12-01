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
import { contentHelper } from '../../helpers';
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
        this.clickedCommand = "" // Reset prop
        this.commandList.push(command)
        const {
          info,
          link = {}
        } = contentHelper[command] || {}

        this.$nextTick(() => {
          if (!command || !info ) {
            // Scroll to active prompt
            this.scrollTo()
          } else {
            // Scroll to top of content
            let commandID = `#command_${this.commandList.length - 1}_content`,
              contentElement = this.$el.querySelector(commandID),
              elemRect = contentElement.getBoundingClientRect()
            
            this.scrollTo(elemRect.height)
          }
        })

        // Open links
        if (link.autoOpen) {
          window.open(link.url)
        }
      }
    },
    scrollTo(contentHeight = 0) {
      let terminal = this.$refs.terminal
      terminal.scrollTop = terminal.scrollHeight - contentHeight - 75 // Snaps to top of content
    },
    updateFocus() {
      this.focusTimestamp = Date.now()

      this.$nextTick(() => {
        this.scrollTo()
      })
    }
  }
};
</script>

<style>
</style>