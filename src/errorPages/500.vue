<template>
  <a-result status="500" title="500" :sub-title="t('errorPages.403') || '对不起，服务器内部错误.'">
    <template #extra>
      <a-button type="primary" @click="home">{{ t('errorPages.backHome') || '返回主页' }}</a-button>
    </template>
  </a-result>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

const home = () => {
  router.replace('/');
};
</script>
