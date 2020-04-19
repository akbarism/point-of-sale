import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import TModal from 'vue-tailwind/src/components/TModal.vue'
import { store } from './store/store'
import vuelidate from 'vuelidate';
Vue.use(vuelidate);

Vue.use(TModal)
Vue.config.productionTip = false

new Vue({
  store:store,
  router,
  render: h => h(App)
}).$mount('#app')
