import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import Input from './components/Input.vue';
import Col from './components/Col.vue';
import Row from './components/Row.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sider from './components/Sider.vue';
import Layout from './components/Layout.vue';
import Content from './components/Content.vue';
import Toast from './components/toast.vue';

Vue.config.productionTip = false;
Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
Vue.component('g-input', Input);
Vue.component('g-col', Col);
Vue.component('g-row', Row);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-layout', Layout);
Vue.component('g-content', Content);
Vue.component('g-Toast', Toast);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
