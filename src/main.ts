import Vue from 'vue';
import ElementUI from 'element-ui';
import { Switch } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);
Vue.component(Switch.name, Switch);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
