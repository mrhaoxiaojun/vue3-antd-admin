<template>
  <div class="detail__container">
    <p>query: {{ route.query }}</p>
    <p>params: {{ route.params }}</p>
  </div>
</template>
<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Detail',
  setup() {
    const route = useRoute();
    return { route };
  },
});
</script>
