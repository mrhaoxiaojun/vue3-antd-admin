<template>
  <a-config-provider v-bind="getPopupContainer">
    <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import globalConfig from '@/config/index';
import { ref, Ref, watch } from 'vue';
import { lang } from './locales/config';
import { useStore } from 'vuex';
// import moment from 'moment';
// moment.locale('zh-cn');

const store = useStore();

const {
  setting: { lang: defaultLang },
} = globalConfig;

const getPopupContainer: Ref = ref({
  locale: lang[defaultLang],
});

watch(
  () => store.state.com.lang,
  function () {
    console.log('current language', store.state.com.lang);
    getPopupContainer.value.locale = lang[store.state.com.lang];
  }
);
</script>
