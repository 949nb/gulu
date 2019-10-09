<template>
  <div class="layout" :class="{['hasSider']: hasSider}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-layout',
  data() {
    return {
      hasSider: false,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      // eslint-disable-next-line no-console
      console.log(vm.$options.name);
      if (vm.$options.name === 'Sider') {
        this.hasSider = true;
      }
    });
  },
};
</script>
<style lang="scss">
  .layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
    &.hasSider {
      flex-direction: row;
    }
  }

</style>
