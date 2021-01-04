import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Yams from '../views/Yams.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/yams',
    name: 'Yams',
    component: Yams,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
