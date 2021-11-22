<template>
  <div class="introduction">
    <h1>{{ msg }}</h1>
    <!-- Declarative Rendering -->
    <div id="counter">
      <h3>Counter: {{ counter }}</h3>
      <button @click.prevent="toggleCounter">
        {{ counterRunning ? "Stop" : "Start" }} timer
      </button>
    </div>
    <div id="bind-attribute">
      <span :title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </div>
    <!-- Handling user input -->
    <div id="event-handling">
      <p>{{ message }}</p>
      <button @click="reverseMessage">Reverse Message</button>
    </div>
    <div id="two-way-binding">
      <p>{{ inputMessage }}</p>
      <input v-model="inputMessage" />
    </div>
    <!-- Conditionals and Loops -->
    <div id="conditional-rendering">
      <p v-if="seen">Now you see me</p>
      <p v-else>Now you don't</p>
      <button @click="hideMe">Hide me</button>
    </div>
    <div id="list-rendering">
      <p>Vue-do</p>
      <input
        @keyup.enter="submitVuedo"
        v-model="vuedoItem"
        placeholder="Enter.."
      />
      <button @click="submitVuedo">Submit</button>
      <vue-do-list :vuedos="vuedos" />
    </div>
    <!-- Computed Caching vs Methods -->
    <div id="computed-caching">
      <h3>Computed Caching vs Methods</h3>
      <p>now: {{ now }}</p>
      <p>getNow: {{ getNow() }}</p>
    </div>
    <!-- Watchers -->
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
    <!-- Displaying Filtered/Sorted Results -->
    <h3>Displaying Filtered/Sorted Results</h3>
    <ul>
      <li v-for="n in oddNumbers" :key="n">{{ n }}</li>
    </ul>
    <div id="range">
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
        {
          id: 1,
          text: "Learn JavaScript",
          class: { completed: true },
        },
        {
          id: 2,
          text: "Learn Vue",
          class: { completed: false },
        },
        {
          id: 3,
          text: "Build something awesome",
          class: { completed: false },
        },
      ],
      vuedoItem: "",
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
  mounted: function () {
    this.counterInterval = setInterval(() => {
      this.counter += 1;
      this.now = Date.now(); // Won't update computed
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
    getNow() {
      return Date.now(); // Updates every re-render
    },
    getAnswer() {
      this.answer = "Thinking...";
      axios
        .get("https://yesno.wtf/api")
        .then(({ data = {} }) => {
          this.answer = data.answer;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
  computed: {
    now() {
      return Date.now(); // Will be cached
    },
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
    oddNumbers() {
      return this.numbers.filter((number) => number % 2 === 1);
    },
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
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
