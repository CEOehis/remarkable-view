<template>
  <textarea
    class="frame"
    ref="markdown"
    :value="value"
    @input="handleInput"
  ></textarea>
</template>

<script>
export default {
  name: 'Editor',
  props: {
    value: String,
  },

  mounted() {
    this.$el.focus();
  },

  methods: {
    handleInput() {
      localStorage.setItem('text', this.$el.value);
      this.$emit('input', this.$el.value);
    },
  },
};
</script>

<style scoped lang="scss">
textarea {
  display: block;
  width: 50%;
  padding: 60px 30px;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  color: #2c3e50;
  font-size: 18px;
  line-height: 30px;
  border: none;
  outline: none;
  resize: none;
  flex-grow: 1;
  background: hsl(0, 0%, 98%);
}

textarea::-webkit-scrollbar {
  -webkit-appearance: none;
}

textarea::-webkit-scrollbar:vertical {
  width: 11px;
}

textarea::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
