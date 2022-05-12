/*
 * @Author: haoxiaojun
 * @Date: 2022-04-05 20:11:03
 * @Details: 国际化语言配置文件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-07 15:13:18
 */

import zh from './language/zh';
import en from './language/en';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';

// i18n本地语言包
export const messages = {
  'zh-CN': zh,
  'en-US': en,
};
// antdV组件库语言包
export const lang = {
  'zh-CN': zhCN,
  'en-US': enUS,
};
// header国际化select
export default {
  'zh-CN': [
    {
      label: '简体中文',
      value: 'zh-CN',
    },
    {
      label: 'English',
      value: 'en-US',
    },
  ],
  'en-US': [
    {
      label: '简体中文',
      value: 'zh-CN',
    },
    {
      label: 'English',
      value: 'en-US',
    },
  ],
};
