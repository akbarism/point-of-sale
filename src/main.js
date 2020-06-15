import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import TModal from 'vue-tailwind/src/components/TModal.vue'
import { store } from './store/store'
import vuelidate from 'vuelidate';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.use(vuelidate);
Vue.use(TModal);
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

new Vue({
  store:store,
  router,
  render: h => h(App)
}).$mount('#app')
