<template>
  <li :class="{ completed: vuedo.completed }" :style="styles">
    {{ vuedo.text }}
  </li>
</template>

<script>
export default {
  data() {
    return {
      styles: {
        color: "#0A9567",
        fontSize: "13px",
      },
    };
  },
  props: ["vuedo"],
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>