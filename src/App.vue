<template>
  <div id="app">
    <g-row>
      <g-col :span='24' style="height: 100px; border: 1px solid grey;text-align: center;">
        <span class='title'>游乐场</span>
      </g-col>
    </g-row>
    <button class="btn" @click="createdMessage">点我</button>


    <g-tab :selected.sync="selectedTab">
      <g-tab-nav>
        <g-tab-item name="first">
          第一项
        </g-tab-item>
        <g-tab-item name='second'>
          <g-icon iconType='good'></g-icon>第二项
        </g-tab-item>
         <g-tab-item name='third' disabled>
          第三项
        </g-tab-item>
      </g-tab-nav>
      <g-tab-content>
        <g-tab-pane name='first'>
          这是第一项的内容
        </g-tab-pane>
        <g-tab-pane name='second'>
          这是第二项的内容
        </g-tab-pane>
        <g-tab-pane name='third'>
          这是第三项的内容
        </g-tab-pane>
      </g-tab-content>
    </g-tab>
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
