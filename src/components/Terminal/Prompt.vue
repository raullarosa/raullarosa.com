<template>
  <div id="prompt" :style="styleObject.prompt">
    <!-- <input v-model="commandInput" type="text" :style="styleObject.input" /> -->
    <span class="directory">raullarosa</span>>
    <span class="input-wrap">
      <span class="width-machine" aria-hidden="true">
        {{ commandInput }}
      </span>
      <input class="input" v-model="commandInput">
    </span>
    <caret />
  </div>
</template>

<script>
import Caret from './Caret.vue'
export default {
  components: { Caret },
  data() {
    return {
      commandInput: ""
    }
  },
  computed: {
    styleObject() {
      return {
        prompt: {
          display: "flex",
          "flex-direciton": "row",
          height: "25px"
        },
        input: {
          "background-color": "transparent",
          color: "white",
          border: "none",
          padding: 0,
          outline: "none !important",
          width: "fit-content",
          "caret-color": "transparent"
        }
      }
    },
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
  color: white;
  outline: none;
  caret-color: transparent;
}

.input-wrap {
  position: relative;
  margin-right: 0.5rem;
}
.input-wrap .input {
  position: absolute;
  width: 100%;
  left: 0;
}
.width-machine {
  color: transparent;
}
</style>