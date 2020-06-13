import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue'
import login from './view/Main/login.vue'
import register from './view/Main/register.vue'


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
  {
    path: '/register',
    name: 'register',
    component: register,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router