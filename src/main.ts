import Vue from 'vue';
import App from './App.vue';
import VueFormulate from '@braid/vue-formulate'
import { de, fr } from '@braid/vue-formulate-i18n'
import i18n from './i18n';

Vue.use(VueFormulate, {
  classes: {
    outer: ['form-group'],
    input: ['form-control'],
  },
  plugins: [ de, fr ]
});
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
