<template>
  <svg class="icon">
    <use :xlink:href="`#i-${iconType}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scope>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
