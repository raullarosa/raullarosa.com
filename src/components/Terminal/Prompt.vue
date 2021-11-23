<template>
  <form id="prompt" @click.prevent="focusPrompt" @submit.prevent="submitPrompt">
    <span class="input-wrap">
      <span class="width-machine" aria-hidden="true">
        <span class="directory">raullarosa</span>>
        {{ `${commandInput}` }}
        <span id="caret" :style="styleObject.caret">{{String.fromCharCode(9619)}}</span>
      </span>
      <input
        ref="prompt"
        class="input"
        v-model="commandInput"
        spellcheck="false"
      />
    </span>
  </form>
</template>

<script>
export default {
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
      console.log(`Prompt: ${this.commandInput}`);
    }
  }
}
</script>

<style>
.directory {
  color: #3eaf7c;
  margin-right: 0.25rem;
}

.input {
  border: none;
  font-family: inherit;
  font-size: inherit;
  padding: 1px 6px;
  background-color: transparent;
  outline: none;
  max-width: "50%";
  color: transparent;
}

.input-wrap {
  position: relative;
}

.input-wrap .input {
  position: absolute;
  width: 100%;
  left: 0;
  cursor: pointer;
}

.width-machine {
  color: white;
  word-break: break-all;
  text-align: left;
}
</style>