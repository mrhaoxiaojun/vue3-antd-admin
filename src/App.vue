<template>
  <a-config-provider v-bind="getPopupContainer">
    <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import globalConfig from '@/config/index'
import { ref, Ref, watch} from 'vue';
import { lang } from './locales/config';
import { useStore } from 'vuex';
// import moment from 'moment';
// moment.locale('zh-cn');

const store = useStore()

let {setting:{lang:defaultLang}} = globalConfig

let getPopupContainer:Ref =  ref({
  locale: lang[defaultLang]
})

watch(()=>store.state.com.lang, function() {
  console.log('current language',store.state.com.lang);
  getPopupContainer.value.locale = lang[store.state.com.lang]
});

</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
