import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/reset.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalAxios } from '@/services/axios-interceptors'
import { setupI18n } from '@/locales/setupI18n';
import mockData from './mock/index'
mockData()

const app = createApp(App)


// 使用国际化i18n
app.use(setupI18n)

// 使用antd
app.use(Antd)

// 使用全局axios
app.use(globalAxios)

// 使用vuex
app.use(store)

// 使用路由
app.use(router)

router.isReady().then(() => app.mount('#app'))
