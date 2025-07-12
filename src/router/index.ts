import { createRouter, createWebHistory } from 'vue-router'
import BlogHome from '@/views/BlogHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome,
      meta: { index: 0 },
    },
    {
      path: '/til',
      name: 'til',
      component: () => import('@/views/TILView.vue'),
      meta: { index: 1 },
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('@/views/SeriesView.vue'),
      meta: { index: 2 },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { index: 4 },
    },
  ],
})

export default router
