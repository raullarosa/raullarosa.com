<template>
  <form id="prompt" @click.prevent="focusPrompt" @submit.prevent="submitPrompt">
    <span class="input-wrap">
      <span class="width-machine" aria-hidden="true">
        <span class="directory">raullarosa</span>
        <span>{{ commandInput }}</span>
        <span id="caret" :style="styleObject.caret">{{String.fromCharCode(9619)}}</span>
      </span>
      <input
        ref="prompt"
        class="input"
        :value="commandInput.toLowerCase()"
        @input="commandInput = $event.target.value.toLowerCase()"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false" 
        type="text"
      />
    </span>
  </form>
</template>

<script>
import { delayHelper } from "../../helpers"
export default {
  props: ['clickedCommand', 'focusTimestamp'],
  emits: ['submitCommand'],
  mounted() {
    this.focusPrompt()
    this.interval = setInterval(() => {
      this.showCaret = !this.showCaret
    }, 500)
  },
  unmounted() {
    clearInterval(this.interval)
  },
  data() {
    return {
      commandInput: "",
      showCaret: true
    }
  },
  computed: {
    styleObject() {
      return {
        caret: {
          position: "absolute",
          transform: "translate(0px, -2px)",
          color: this.showCaret ? "white" : "transparent"
        }
      }
    }
  },
  methods: {
    focusPrompt() {
      this.$refs.prompt.focus()
    },
    submitPrompt() {
      this.$emit('submitCommand', this.commandInput, false)
      this.commandInput = ""
    },
    typeCommand: async function(command) {
      this.commandInput = ""
      await delayHelper.typeWord(command, (wordTyped) => {
        this.commandInput = wordTyped
      })
      this.$emit('submitCommand', command)
      this.commandInput = ""
    }
  },
  watch: {
    clickedCommand(newValue) {
      if (newValue) this.typeCommand(newValue)
    },
    focusTimestamp(newValue, oldValue) {
      if (newValue > oldValue) this.focusPrompt()
    }
  }
}
</script>

<style>
#prompt {
  height: 100%;
}

.directory {
  color: #3eaf7c;
  margin-right: 0.5rem;
}

.input {
  border: none;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  background-color: transparent;
  outline: none;
  max-width: "50%";
  color: transparent;
  overflow: hidden;
}

.input-wrap {
  position: relative;
}

.input-wrap .input {
  position: absolute;
  width: 100%;
  left: 0;
  cursor: default;
}

.width-machine {
  color: white;
  word-break: break-all;
  text-align: left;
}
</style>