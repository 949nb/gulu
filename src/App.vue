<template>
  <div id="app">
    <g-layout class="wrap">
      <g-header class="demo">
        <h1>header</h1>
      </g-header>
      <g-layout>
        <g-sider class="demo">
          <h1>Sider</h1>
        </g-sider>
        <g-content class="demo">
          <h1>content</h1>
        </g-content>
      </g-layout>
      <g-footer class="demo">
        <h1>footer</h1>
      </g-footer>
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
    border: 10px solid black;
    & > .demo {
      border: 2px solid black;
    }
  .demo {
      border: 2px solid black;
    }
}
</style>
