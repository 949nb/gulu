<template>
  <div id="app">
    <g-layout class="wrap">
      <g-header></g-header>
      <g-content></g-content>
      <g-footer></g-footer>
    </g-layout>

    <!-- <g-input value="张三"></g-input>
    <g-input value="王麻子" disabled></g-input>
    <g-input value="李四" error="姓名不能少于两个字"></g-input>
    <div>
      <g-input v-model="value"></g-input>
      <p><span>{{ value }}</span></p>
    </div>
    <br>
    <div style="margin: 20px;">
      <g-button icon-type="setting"> 按钮 </g-button>
      <g-button color-type='success' icon-type="download"> 下载 </g-button>
      <g-button icon-position="right" icon-type="good" colorType='danger'> 点赞 </g-button>
      <g-button icon-position='right' icon-type='right' :loading='true'> 向右 </g-button>
      <g-button :loading="true"></g-button>
      <g-button colorType='warning' icon-type="loading">有状态的按钮</g-button>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="scss" scope>
  .g-button {
    margin: 5px;
  }
  .wrap {
    border: 1px solid black;
  }
</style>
