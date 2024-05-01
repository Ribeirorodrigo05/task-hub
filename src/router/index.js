import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
});

export default router;
