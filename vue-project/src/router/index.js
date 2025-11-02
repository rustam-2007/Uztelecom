import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/advantages',
      name: 'advantages',
      component: () => import('../pages/AdvantagesView.vue'),
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../pages/StartView.vue'),
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../pages/StartView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FaqView.vue'),
    },
    {
      path: '/tarifs',
      name: 'tarifs',
      component: () => import('../pages/TarifsView.vue'),
    },
  ],
})

export default router
