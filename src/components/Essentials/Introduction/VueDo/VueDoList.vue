<template>
  <ol>
    <vue-do-item v-for="vuedo in vuedos" v-bind:key="vuedo.id" :vuedo="vuedo" />
  </ol>
</template>

<script>
import VueDoItem from "./VueDoItem";

export default {
  components: { VueDoItem },
  props: ["vuedos"],
};
</script>

<style>
</style>