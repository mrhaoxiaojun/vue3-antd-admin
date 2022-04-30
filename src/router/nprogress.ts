/*
 * @Author: haoxiaojun 
 * @Date: 2022-04-10 20:24:08 
 * @Details: 添加页面进度条
 * @Last Modified by:   haoxiaojun 
 * @Last Modified time: 2022-04-10 20:24:08 
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
import { Router } from 'vue-router'

export const nprogress = (router: Router) => {

  NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
  })
  //路由监听
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  //路由跳转结束
  router.afterEach(() => {
    NProgress.done()
  })
  
}
