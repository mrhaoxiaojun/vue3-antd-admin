/*
 * @Author: haoxiaojun
 * @Date: 2022-04-12 11:24:51
 * @Details: 菜单权限过滤
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-05-12 15:44:47
 */
import store from '@/store';
import { whiteList } from './basics.router';
import { Router, RouteRecordRaw } from 'vue-router';

const loginPath = '/login';
const defultPath = '/';

// 权限验证

export const permission = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // token判断需要根据项目实际情况来判定其正确性
    if (localStorage.getItem('token')) {
      if (to.path === loginPath) {
        next({ path: defultPath });
      } else {
        if (store.state.user.name.length === 0) {
          store
            .dispatch('user/userInfo')
            .then(() => {
              store.dispatch('user/menu').then((e) => {
                e.forEach((item: RouteRecordRaw) => {
                  router.addRoute(item);
                });
                router.addRoute({ path: '/:pathMatch(.*)*', redirect: '/404' });
                const redirect = from.query.redirect as string | undefined;
                if (redirect && to.fullPath === redirect) {
                  next({ ...to, replace: true });
                } else {
                  next({ ...to });
                }
              });
            })
            .catch(() => {
              localStorage.removeItem('token');
              next({ path: loginPath, query: { redirect: to.fullPath } });
            });
        } else {
          next();
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        next();
      } else {
        router.push({ path: loginPath, query: { redirect: to.fullPath } });
      }
    }
  });
};
