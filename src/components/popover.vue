<template>
  <div class="popover">
    <div v-show="active" class="popoverInfo">
      <slot></slot>
    </div>
    <div @click="openPopover" class="popoverBtn">
      <slot name="popoverBtn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      active: false
    }
  },
  methods: {
    openPopover() {
      console.log('点我打开');
      this.active = !this.active
    },
  },
};
</script>

<style scoped>
  .popoverBtn {
  }
</style>
