<template>
  <div id="app">
    <g-row>
      <g-col :span='24' style="height: 100px; border: 1px solid grey;text-align: center;">
        <span class='title'>sssss</span>
      </g-col>
    </g-row>
    <g-button class="btn" @click.native="createdMessage">点我</g-button>
    <div style="margin: 100px;">
      <g-popover>
        <template v-slot:content>
          <span>这是一段popover中的话</span>
        </template>
          <g-button>我是popover</g-button>
      </g-popover>
    </div>
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
      // eslint-disable-next-line radix
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
