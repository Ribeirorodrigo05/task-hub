import { createRouter, createWebHashHistory } from 'vue-router';
const HomePage = () => import('@/views/home/HomePage.vue');

import { MenuCategoriesRoutes } from './MenuCategories';

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    ...MenuCategoriesRoutes
  ]
});

export default router;
