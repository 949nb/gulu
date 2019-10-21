import Toast from '../components/Toast.vue';

export default {
  install(Vue) {
    // eslint-disable-next-line func-names
    Vue.prototype.$toast = function (text) {
      console.log('this is toast');
      // Vue.extend(xx)就是构造一个xx的constructor(构造函数)，这个xx可以是一个Vue实例
      const toastConstructor = Vue.extend(Toast);
      // eslint-disable-next-line new-cap
      const toast = new toastConstructor();
      // 上面两句代码 就是构造了一个Toast组件的新的实例
      toast.$slots.default = text;
      toast.$mount();// $mount() 方法 可以讲没有挂载到Dom的Vue实例挂载，如果（）中没有接受到参数，则挂载到内存中 需要手动将实例用原生DOM API插入到DOM中。
      document.body.appendChild(toast.$el);
    };
  },
};
