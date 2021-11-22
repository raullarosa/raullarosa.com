<template>
  <img id="vue-logo" alt="Vue logo" src="./assets/logo.png" />
  <Introduction msg="Welcome to Your Vue.js App" />
  <!-- <AppComponentInstances /> -->
</template>

<script>
import Introduction from "./components/Essentials/Introduction";
// import AppComponentInstances from "./components/Essentials/AppComponentInstances";

export default {
  name: "App",
  components: {
    Introduction,
    // AppComponentInstances,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#vue-logo {
  max-width: 100%;
  width: 60px;
}
</style>
