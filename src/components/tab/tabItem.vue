<template>
  <div @click="clickme">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String || Number,
      required: true,
    },
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
    });
  },
  methods: {
    clickme() {
      this.eventBus.$emit('update:selected', this.name);
    },
  },
  computed: {
    
  }
};
</script>

<style lang="scss">
</style>
