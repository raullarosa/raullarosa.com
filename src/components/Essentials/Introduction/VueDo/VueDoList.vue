<template>
  <ol>
    <vue-do-item
      v-for="vuedo in vuedos"
      v-bind:key="vuedo.id"
      :vuedo="vuedo"
      @click="$emit('toggleCompleted', vuedo.id)"
    />
  </ol>
</template>

<script>
import VueDoItem from "./VueDoItem";

export default {
  components: { VueDoItem },
  props: ["vuedos"],
  emits: ["toggleCompleted"],
};
</script>

<style>
</style>