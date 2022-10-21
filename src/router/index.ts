import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'index',
        component: () => import('@/views/home/index.vue'),
      },
      {
        name: 'custom',
        path: 'custom',
        component: () => import('@/views/custom/index.vue'),
      },
      {
        name: 'unocss',
        path: 'unocss',
        component: () => import('@/views/unocss/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
