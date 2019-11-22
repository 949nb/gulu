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
import toastPlugin from './plugin/toast';
import Tab from './components/tab/tab.vue';
import TabContent from './components/tab/tabContent.vue';
import TabItem from './components/tab/tabItem.vue';
import TabNav from './components/tab/tabNav.vue';
import TabPane from './components/tab/tabPane.vue';
import Popover from './components/popover.vue';

Vue.use(toastPlugin);

Vue.config.productionTip = false;
Vue.component('g-popover', Popover);
Vue.component('g-tab', Tab);
Vue.component('g-tab-nav', TabNav);
Vue.component('g-tab-item', TabItem);
Vue.component('g-tab-content', TabContent);
Vue.component('g-tab-pane', TabPane);
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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
