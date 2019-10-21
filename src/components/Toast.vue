<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
  .toast {
    height: 30px;
    margin-bottom: 10px;
    width: 100px;
    border-radius: 5px;
    background-color: #333639;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 0px 3px 0px grey;
  }
</style>
