<template>
  <div :class="cloClass" :style="{padding: `0px ${gutton}px`}">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      cloClass: {
        col: true,
        [`col-${this.span}`]: this.span,
        [`offset-${this.offset}`]: this.offset,
      },
      gutton: 0,
    };
  },
};
</script>

<style lang="scss">
  $class: col-;
  .col{
    width: 50%;
    height: 100px;
    @for $i from 1 through 24 {
      &.col-#{$i} {
        width: ($i / 24) * 100%;
      }
      &.offset-#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
</style>
