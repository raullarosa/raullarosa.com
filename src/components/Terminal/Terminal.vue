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
      // Trim spaces off input
      command = command.trim();

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
            
            this.scrollTo(elemRect.top - 30) // Show beginning of content
          }
        })

        // Open links
        if (link.autoOpen) {
          window.open(link.url)
        }
      }
    },
    scrollTo(contentPosition = 0) {
      let terminal = this.$refs.terminal
      terminal.scrollTop = contentPosition || terminal.scrollHeight // Snaps to top of content or bottom of page
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