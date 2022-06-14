/*
 * @Author: haoxiaojun
 * @Date: 2022-04-05 20:11:17
 * @Details: 国际化（i18n）配置文件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-05 20:20:22
 */
import { App } from 'vue';
import { createI18n } from 'vue-i18n'; // 引入vue-i18n组件
import { messages } from './config';
import globalConfig from '@/config/index';

const {
  setting: { lang: defaultLang },
} = globalConfig;

// 注册i8n实例并引入语言文件
const localeData = {
  legacy: false, // 使用CompotitionAPI必须添加这条.
  locale: defaultLang,
  messages,
  globalInjection: true,
};

export const i18n = createI18n(localeData);

// setup i18n instance with glob
export const setupI18n = {
  install(app: App) {
    app.use(i18n);
  },
};
