import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/opportunities',
      name: 'opportunities',
      component: () => import('../pages/OpportunitiesView.vue'),
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../pages/StartView.vue'),
    },
  ],
})

export default router
