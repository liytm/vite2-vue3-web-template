import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// 路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: about */ '../views/About/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes
})
export default router
