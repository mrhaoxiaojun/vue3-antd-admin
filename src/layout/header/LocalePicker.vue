<template>
  <a-select
    v-model:value="lang"
    label-in-value
    style="width: 120px"
    :options="options"
    @change="handleChange"
  >
  </a-select>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useStore } from 'vuex';
import { SelectTypes } from 'ant-design-vue/es/select';
import globalConfig from '@/config/index';
import langConfig from '@/locales/config';
import { useI18n } from 'vue-i18n';

interface Value {
  value: string;
  label?: string;
}

const { locale } = useI18n();
const store = useStore();

const { setting } = globalConfig;

const options: Ref = ref<SelectTypes['options']>(langConfig[setting.lang]);
const lang: Ref = ref<Value>(langConfig[setting.lang][0]);

const handleChange = (value: Value) => {
  options.value = langConfig[value.value];
  options.value.forEach((e: any) => {
    if (e.value === value.value) {
      lang.value = e;
    }
  });

  localStorage.setItem('lang', value.value);
  store.commit('com/setLang', value.value);
  locale.value = value.value;
};
</script>
