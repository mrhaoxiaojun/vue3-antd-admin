<template>
  <div>
      {{ t('errorPages.backHome') || "返回主页"}}
      Hello
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'

const { t } = useI18n();


</script>

<style lang = 'less' scoped>

</style>