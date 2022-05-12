import { RouteRecordRaw } from 'vue-router';
// 基础路由

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/errorPages/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/errorPages/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/errorPages/500.vue'),
  },
];

// 白名单(路径)

export const whiteList = ['/login', '/403', '/404', '/500'];
