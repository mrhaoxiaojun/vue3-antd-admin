<template>
  <!-- logo -->
  <div v-if="setting.layout === 'side'" class="menu__logo">
    <div class="menu__logo-icon">
      <img src="@/assets/imgs/layout/logo.png" />
    </div>
    <span v-show="!collapsed">{{ t('layout.head.systemName') || setting.systemName }}</span>
  </div>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    mode="inline"
  >
    <create v-for="item in menuRouter" :key="item.id" :router="item" />
  </a-menu>
</template>
<script lang="ts">
import create from './menu-create';
import { useRoute } from 'vue-router';
import { mapState, useStore } from 'vuex';
// import AIcon from '@/components/aicon/AIcon.vue'
import { defineComponent, ref, watch, onBeforeMount } from 'vue';
import config from '@/config';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'Menu',
  components: {
    create,
  },
  props: {
    collapsed: {
      required: true,
      type: Boolean,
    },
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const selectedKeys = ref<string[]>([]);
    const openKeys = ref<string[]>([]);
    const setting = config.setting;

    const { t } = useI18n();

    const setMenuKey = () => {
      if (!route.meta.hidden) {
        selectedKeys.value = [route.name as string];
        openKeys.value = [];
        route.matched.forEach((item) => {
          openKeys.value.push(item.name as string);
        });
        // 设置顶部tab(栏目)切换
        store.commit('menu/setId', route.matched[0].meta.id);
      }
    };

    onBeforeMount(setMenuKey);
    watch(route, setMenuKey);

    return { selectedKeys, openKeys, setting, t };
  },
  computed: {
    ...mapState({
      menuRouter: (state: any) => state.menu.menuRouter,
    }),
  },
});
</script>

<style lang="less" scoped>
.menu__logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;
  & .menu__logo-icon {
    width: 32px;
    margin-right: 8px;
    img {
      display: block;
      width: 100%;
    }
  }
  & span {
    display: inline-block;
    font-size: 16px;
    color: #fff;
  }
}
</style>
