<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <g-row>
      <g-col :span='24' style="height: 100px; border: 1px solid grey;text-align: center;">
        <span class='title'>游乐场</span>
      </g-col>
    </g-row>
    <button class="btn" @click="createdMessage">点我</button>

    <g-popover>
      <span>这是一段popover中的话</span>
      <template v-slot:popoverBtn>
        <button>popover</button>
      </template>
    </g-popover>
 </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      n: 0,
      selectedTab: 'second',
    };
  },
  methods: {
    createdMessage() {
      this.$toast(`你的智商目前为${parseInt(Math.random() * 100)}。`, {
        closeButton: {
          text: '我知道了',
          callback: () => {
            console.log('关闭后，干什么什么事情');
          },
        },
        autoClose: true,
        isHTML: true,
        position: 'bottom',
      });
    },
  },
};
</script>

<style lang="scss" scope>
  .btn{
    height: 30px;
    width: 70px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .btn:focus{
    outline: none;
  }
  .btn:hover{
    background-color: #D8D8D8;
  }
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
