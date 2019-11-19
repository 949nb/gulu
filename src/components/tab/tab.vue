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
      default: 'first',
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
  created() {
    this.eventBus.$emit('updata:selected', this.selected);
  },
  computed: {
    selectedName: {
      get() {
        return this.selected;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
};
</script>
