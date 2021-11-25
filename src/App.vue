<template>
  <terminal></terminal>
</template>

<script>
import Terminal from "./components/Terminal/Terminal.vue";

export default {
  name: "App",
  components: {
    Terminal,
  },
};
</script>

<style>
#app {
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #020204;
  color: white;
  min-width: 100vw;
  min-height: 100vh;
  font-size: 20px;
}
#vue-logo {
  max-width: 100%;
  width: 60px;
}
</style>
