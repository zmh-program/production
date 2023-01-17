import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/start.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/docs.vue')
    }
  ]
})

export default router
