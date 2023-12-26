import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('../views/home/HomePage.vue')
const LoginPage = () => import('../views/login/LoginPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
