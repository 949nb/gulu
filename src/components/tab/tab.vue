<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Tab',
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    console.log(this.selected);
    const a = this.selected;
    this.eventBus.$emit('update:selected', a);
    console.log(1);
  },
};
</script>
