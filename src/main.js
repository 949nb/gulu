import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Col from './components/Col.vue';
import Row from './components/Row.vue';

Vue.config.productionTip = false;
Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
Vue.component('g-input', Input);
Vue.component('g-col', Col);
Vue.component('g-row', Row);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
