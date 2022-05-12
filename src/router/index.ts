import { createRouter, createWebHistory } from 'vue-router';
import { constantRouterMap } from './basics.router';
import { permission } from './permission';
import { nprogress } from './nprogress';

// 实例化路由
const router = createRouter({
  history: createWebHistory('/'),
  routes: constantRouterMap,
});

nprogress(router);

permission(router);

export default router;
