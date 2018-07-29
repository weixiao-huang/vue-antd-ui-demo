import Vue from 'vue';
import { Table, Badge, Timeline, Modal, Collapse, Alert } from 'vue-antd-ui';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component(Table.name, Table);
Vue.component(Badge.name, Badge);
Vue.component(Timeline.name, Timeline);
Vue.component(Timeline.Item.name, Timeline.Item);
Vue.component(Modal.name, Modal);
Vue.component(Collapse.name, Collapse);
Vue.component(Collapse.Panel.name, Collapse.Panel);
Vue.component(Alert.name, Alert);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
