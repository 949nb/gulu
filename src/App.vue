<template>
  <div id="app">
    <div style="border: 1px solid black">
      <!-- <g-row :gutton="20">
        <g-col :span="10"></g-col>
        <g-col :span="12" :offset='2'></g-col>
      </g-row>
      <g-row>
        <g-col :span="1"></g-col>
        <g-col :span="21" :offset="2"></g-col>
      </g-row>
      <g-row>
        <g-col :span="6"></g-col>
        <g-col :span="6"></g-col>
        <g-col :span="6"></g-col>
        <g-col :span="6"></g-col>
      </g-row>
      <g-row>
        <g-col :span="8"></g-col>
        <g-col :span="8"></g-col>
        <g-col :span="8"></g-col>
      </g-row> -->
      <g-row :gutton='20'>
        <g-col :span="12"></g-col>
        <g-col :span="12"></g-col>
      </g-row>
    </div>
    <g-input value="张三"></g-input>
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
    </div>
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
</style>
