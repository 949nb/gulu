import Vue from 'vue';
// 弹窗组件单文件
import Message from './message.vue';

const createMessage = (options) => {
  // 获取body并且创建一个新的div节点
  console.log('option', options)
  const { body } = document;
  const bindPhone = document.createElement('div');

  // 给创建的div设置id=message，并且添加到body后
  bindPhone.setAttribute('id', 'message');
  body.appendChild(bindPhone);

  // 这里我们return一个新的Vue实例并且将实例挂载到我们刚创建的DOM节点上
  return new Vue({
    render: h => h(
      Message, {
        props: {
          text: options.props.text,
        },
      },
    ),
  }).$mount('#message');
};

export default createMessage;
