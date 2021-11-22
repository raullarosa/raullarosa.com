<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- Declarative Rendering -->
    <div id="counter">
      <h3>Counter: {{ counter }}</h3>
      <button v-on:click="toggleCounter">
        {{ counterRunning ? "Stop" : "Start" }} timer
      </button>
    </div>
    <div id="bind-attribute">
      <span v-bind:title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </div>
    <!-- Handling user input -->
    <div id="event-handling">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <div id="two-way-binding">
      <p>{{ inputMessage }}</p>
      <input v-model="inputMessage" />
    </div>
    <!-- Conditionals and Loops -->
    <div id="conditional-rendering">
      <p v-if="seen">Now you see me</p>
      <button v-on:click="hideMe">Hide me</button>
    </div>
    <div id="list-rendering">
      <p>Vue-do</p>
      <input v-model="vuedoItem" placeholder="Enter.." />
      <button v-on:click="submitVuedo">Submit</button>
      <vue-do-list :vuedos="vuedos" />
    </div>
  </div>
</template>

<script>
import VueDoList from "./VueDo/VueDoList";
export default {
  components: { VueDoList },
  name: "Introduction",
  props: {
    msg: String,
  },
  data: function () {
    return {
      counter: 0,
      message: "You loaded this page on " + new Date().toLocaleString(),
      counterRunning: true,
      inputMessage: "Hello vue!",
      seen: true,
      vuedos: [
        { id: 1, text: "Learn JavaScript" },
        { id: 2, text: "Learn Vue" },
        { id: 3, text: "Build something awesome" },
      ],
      vuedoItem: "",
    };
  },
  mounted: function () {
    this.counterInterval = setInterval(() => {
      this.counter += 1;
    }, 1000);
  },
  methods: {
    toggleCounter() {
      if (this.counterRunning) {
        clearInterval(this.counterInterval);
      } else {
        this.counterInterval = setInterval(() => {
          this.counter += 1;
        }, 1000);
      }

      this.counterRunning = !this.counterRunning;
    },
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    hideMe() {
      this.seen = false;
    },
    submitVuedo() {
      this.vuedos.push({
        id: this.vuedos.length + 1,
        text: this.vuedoItem,
      });
      this.vuedoItem = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
