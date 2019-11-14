<template>
  <div class="tab-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabNav',
};
</script>

<style lang="scss">
.tab-nav{
  display: flex;
  & > div {
    margin: 0 5px;
    padding: 20px;
    border: 1px solid;
    cursor: pointer;
  }
}
</style>
