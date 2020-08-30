import Vue from 'vue';
import App from './App.vue';
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  classes: {
    outer: ['form-group'],
    input: ['form-control'],
  }
})
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
