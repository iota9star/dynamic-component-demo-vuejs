import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// eslint-disable-next-line no-extend-native
Array.prototype.add = function (val, index) {
  if (index > -1) {
    this.splice(index, 0, val);
  }
};

// eslint-disable-next-line no-extend-native
Array.prototype.removeIndex = function (index) {
  if (index > -1) {
    this.splice(index, 1);
  }
};
