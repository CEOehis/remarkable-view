import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import preview from './preview.js';

// Setup app preview data for user
const previewText = window.localStorage.getItem('text');
if (!previewText) {
  window.localStorage.setItem('text', preview);
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
