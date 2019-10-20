<template>
  <div id="app">
    <g-row>
      <g-col :span='24' style="height: 100px; border: 1px solid grey;text-align: center;">
        <span class='title'>游乐场</span>
      </g-col>
    </g-row>
    <button @click="createdMessage">点我</button>
  </div>
</template>

<script>
import createMessage from './components/message';

export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    createdMessage() {
      console.log(12);
      createMessage({
        props: {
          text: '这是一个弹窗',
        },
      });
    },
  },
};
</script>

<style lang="scss" scope>
  .title{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 60px;
    color: grey;
  }
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
