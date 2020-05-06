<template>
  <div class="previewer" v-html="markDown"></div>
</template>

<script>
export default {
  name: 'Previewer',
  props: {
    markDown: String,
  },
};
</script>

<style lang="scss">
.previewer {
  width: 50%;
  height: 100vh;
  padding: 60px;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;
  line-height: 30px;
  border: none;
  flex-grow: 1;
  overflow: scroll;
  background: hsl(0, 0%, 95%);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 1.5em;
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 1em;
  }

  pre {
    display: block;
    font-size: 87.5%;
    color: #212529;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    border-radius: 5px;
    background: #dfdfdf;
    padding: 10px;

    code {
      font-size: inherit;
      color: inherit;
      word-break: normal;
    }
  }

  code {
    font-size: 87.5%;
    color: #e83e8c;
    word-wrap: break-word;
    border-radius: 5px;
    background: #dfdfdf;
    padding-left: 5px;
    padding-right: 5px;
  }

  a > code {
    color: inherit;
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }

    &:not([href]) {
      color: inherit;
      text-decoration: none;
    }

    &:not([href]):hover {
      color: inherit;
      text-decoration: none;
    }
  }

  blockquote {
    border-left: 3px solid #a7a7a7;
    color: #a7a7a7;
    padding-left: 25px;
    margin: 0 0 1rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
    padding-left: 50px;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  th {
    text-align: inherit;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 1px solid rgb(204, 204, 204);
    padding: 5px 10px;
  }
}
</style>
