<template>
  <div>
    <div :class='activeClass' v-if="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    activeClass() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name, 'pane')
      this.active = name === this.name;
    });
  },
};
</script>

<style>
.active {
  background: red;
}
</style>
