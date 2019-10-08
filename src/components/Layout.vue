<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$el.children);
  },
};
</script>
<style lang="scss">
  .layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

</style>
