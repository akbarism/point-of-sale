import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue'


vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router