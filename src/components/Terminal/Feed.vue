<template>
  <div id="feed">
    <div
      v-for="(command, index) in commandList"
      v-bind:key="index"
      class="width-machine command"
    >
      <span class="directory">raullarosa</span>
      <span>{{ command }}</span>
    <div class="width-machine output">
      <span v-if="content[command]" class="content" :id="`command_${index}_content`">
        <span v-if="content[command].info" class="info">
          <span v-if="content[command].info.title" class="title">{{ content[command].info.title }}</span>
          <span v-if="content[command].info.dateRange" class="date">{{ content[command].info.dateRange }}</span>
          <span
            v-for="(text, textIndex) in content[command].info.text"
            v-bind:key="`command_${index}_text_${textIndex}`"
            class="text"
          >
            {{ text }}
          </span>
        </span>
        <a
          v-if="!!content[command].link"
          v-bind:href="content[command].link.url" 
          @click.prevent="openLink(content[command].link.url)">
          {{ content[command].link.text }}
        </a>
        <span v-if="content[command].actions" class="actions">
          Type or click one of the following commands:
          <ul class="dashed">
            <li
              v-for="(action, actionIndex) in content[command].actions"
              v-bind:key="`${index}_action_${actionIndex}`"
              class="action-link"
              @click.prevent="handleAction(action)"
            >
              {{ action.label }}
            </li>
          </ul>
        </span>
      </span>
      <span v-else-if="!!!command">
        <!-- Nothing to render -->
      </span>
      <span v-else>
        command not found: {{ command }}
      </span>
    </div>
    </div>
  </div>
</template>

<script>
import { contentHelper } from "../../helpers"
export default {
  props: ['commandList'],
  emits: ['submitCommand'],
  data() {
    return {
      content: contentHelper
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$emit("submitCommand", "projects", true)
    // }, 1000)
  },
  methods: {
    handleAction(action = {}) {
      switch(action.type) {
        case 'link': {
          window.open(action.url)
          break;
        }
        default: this.$emit("submitCommand", action.label, true)
      }
    },
    openLink(url) {
      window.open(url)
    }
  }
};
</script>

<style>
#feed {
  max-width: 600px;
}
.command {
  margin-bottom: 0.5rem;
}
.output {
  padding-top: 0.5rem;
}
.content {
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  word-break: normal;
}
.info>.title {
  margin-bottom: 0.5rem;
}
.info>.date {
  margin-bottom: 0.5rem;
}
.info>.text {
  margin-bottom: 0.5rem;
}
.actions {
  word-break: normal;
  margin-top: 1rem;
}
.action-link {
  font-style: italic;
  cursor: pointer;
}
.action-link:hover {
  text-decoration: underline;
}
ul {
  margin: 0;
}
ul.dashed {
  list-style-type: none;
}
ul.dashed > li {
  text-indent: -5px;
}
ul.dashed > li:before {
  content: "- ";
  text-indent: -5px;
}
a:-webkit-any-link {
  color: white !important;
  word-break: normal;
}
</style>