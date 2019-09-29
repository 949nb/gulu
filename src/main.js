import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('g-icon', Icon);
Vue.component('g-button', Button);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

{
  const Cons = Vue.extend(Button);
  const vm = new Cons({
    porpsData: {
      colorType: 'success',
      iconType: 'setting',
    },
  });
  vm.$mount();
  const button = vm.$el.querySelector('BUTTON');
  console.dir(button);
}
