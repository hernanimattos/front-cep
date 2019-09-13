import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueTheMask);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
