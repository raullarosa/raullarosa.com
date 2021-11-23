<template>
  <terminal></terminal>
  <!-- <Introduction msg="Welcome to Your Vue.js App" /> -->
  <!-- <AppComponentInstances /> -->
</template>

<script>
import Terminal from "./components/Terminal/Terminal.vue";
// import Introduction from "./components/Essentials/Introduction";
// import AppComponentInstances from "./components/Essentials/AppComponentInstances";

export default {
  name: "App",
  components: {
    // Introduction,
    // AppComponentInstances,
    Terminal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #2c3e50; */
  background-color: #020204;
  color: white;
  min-width: 100vw;
  min-height: 100vh;
}
#vue-logo {
  max-width: 100%;
  width: 60px;
}
</style>
