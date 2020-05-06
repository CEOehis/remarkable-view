<template>
  <div id="app">
    <Header />
    <div class="main">
      <Editor v-model="markDownData" />
      <previewer :mark-down="rawHtml" />
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import Header from './components/Header.vue';
import Editor from './components/Editor.vue';
import Previewer from './components/Previewer.vue';

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
});

export default {
  name: 'App',
  components: {
    Header,
    Editor,
    Previewer,
  },

  data() {
    return {
      markDownData: '',
    };
  },

  mounted() {
    const text = localStorage.getItem('text') || '';
    this.markDownData = text;
  },

  computed: {
    rawHtml: function() {
      return marked(this.markDownData);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
}

html,
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.15;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  color: #2c3e50;
}

.main {
  display: flex;
}
</style>
