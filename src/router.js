import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue'
import login from './view/Main/login.vue'


vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },

];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router