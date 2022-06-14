/*
 * @Author: haoxiaojun
 * @Date: 2022-04-05 20:11:03
 * @Details: 国际化语言配置文件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-07 15:13:18
 */

import zh from './language/zh';
import en from './language/en';
import fr from './language/fr';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import frFR from 'ant-design-vue/es/locale/fr_FR';

// i18n本地语言包
export const messages = {
  'zh-CN': zh,
  'en-US': en,
  'fr-FR': fr,
};
// antdV组件库语言包
export const lang = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'fr-FR': frFR,
};
// 浏览器默认语言匹配
export const browserLanguage = {
  zh: 'zh-CN',
  en: 'en-US',
  fr: 'fr-FR',
};
// 国际化选项
export const selectLanguage = [
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: 'Français',
    value: 'fr-FR',
  },
];
// header国际化select
export default {
  'zh-CN': selectLanguage,
  'en-US': selectLanguage,
  'fr-FR': selectLanguage,
};
