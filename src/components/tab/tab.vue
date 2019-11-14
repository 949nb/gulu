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
      default: '',
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
    this.eventBus.$on('update:selected', (name) => {
      this.selected = name;
      console.log(this.selected, 'tab', name);
    });
    // console.log('this', this)
    // console.log('eventbus', this.eventBus)
  },
};
</script>
