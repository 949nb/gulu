<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutton: {
      type: [Number],
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.gutton = this.gutton;
    });
  },
  data() {
    return {
      rowStyle: {
        marginLeft: `-${this.gutton}px`,
        marginRight: `-${this.gutton}px`,
      },
    };
  },
};
</script>

<style lang="scss" scope>
  .row {
    height: 100px;
    display: flex;
  }

</style>
