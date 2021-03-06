<template>
  <a-tabs
    v-model:activeKey="activeKey"
    type="editable-card"
    :tab-bar-gutter="6"
    hide-add
    class="tabs__view"
    @tabClick="jump"
    @edit="deltab"
  >
    <a-tab-pane v-for="(item, index) in tabList" :key="item.fullPath">
      <template #tab>
        <a-dropdown :trigger="['contextmenu']">
          <div style="display: inline-block">{{ item.title }}</div>
          <template #overlay>
            <a-menu @click="condition(item, index, $event)">
              <a-menu-item key="current">{{
                t('layout.tabs.current') || '关闭当前标签'
              }}</a-menu-item>
              <a-menu-item key="right">{{ t('layout.tabs.closeRight') || '关闭右侧' }}</a-menu-item>
              <a-menu-item key="left">{{ t('layout.tabs.closeLeft') || '关闭左侧' }}</a-menu-item>
              <a-menu-item key="other">{{
                t('layout.tabs.closeOthers') || '关闭其他'
              }}</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-tab-pane>
  </a-tabs>
  <div class="main__container">
    <router-view v-slot="{ Component }">
      <keep-alive :include="includeList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { watch, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { TabItem } from '@/store/modules/tabs';
import useMapState from '@/hooks/useMapState';

const myState: any = useMapState({
  tabList: (state: any) => state.tabs.tabList as TabItem[],
  includeList: (state: any) => state.keepAlive.includeList,
});

const { tabList, includeList } = myState;

// 激活的tab
const activeKey = ref<string>();

const store = useStore();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

// 添加tab方法
const addTab = (data: RouteLocationNormalizedLoaded) => {
  store.commit('tabs/steList', {
    fullPath: data.fullPath,
    name: data.name,
    title: data.meta.title,
  });
};

// 设置路由缓存(白)名单方法
const setKeepAlive = (data: RouteLocationNormalizedLoaded) => {
  if (data.meta.keepAlive) {
    store.commit('keepAlive/setKeepAlive', data.name as string);
  }
};

watch(route, (to) => {
  addTab(to);
  setKeepAlive(to);
  activeKey.value = to.fullPath;
});

onBeforeMount(() => {
  addTab(route);
  setKeepAlive(route);
  activeKey.value = route.fullPath;
});

/**
 * @desc：tab点击
 * @param { string } targetKey 点击的tabKey
 */
const jump = (targetKey: string) => {
  if (route.fullPath !== targetKey) {
    router.push(targetKey);
  }
};

/**
 * @desc：删除tab
 * @param { string } targetKey 点击的tabKey
 * @param { string } action 事件类型
 */
const deltab = (targetKey: string, action: string) => {
  if (action === 'remove') {
    store.commit('tabs/delList', targetKey);
  }
};

/**
 * @desc: 条件删除
 * @param { TabItem } tab tab对象
 * @param { number } index 序号
 */
const condition = (tab: TabItem, index: number, item: any) => {
  switch (item.key) {
    case 'current':
      store.commit('tabs/delList', tab.fullPath);
      break;
    case 'right':
      store.commit('tabs/delRight', index);
      break;
    case 'left':
      store.commit('tabs/delLeft', index);
      break;
    case 'other':
      store.commit('tabs/delOther', index);
      break;
  }
};

// export default defineComponent({
//   name: 'LayoutTabs',
//   computed: {
//     ...mapState({
//       tabList: (state: any) => state.tabs.tabList as TabItem[],
//       includeList: (state: any) => state.keepAlive.includeList
//     })
//   },
//   setup () {
//     。。。。
//     return { activeKey, jump, deltab, condition,BlankView }
//   }
// })
</script>

<style lang="less" scoped>
.main__container {
  background-color: #fff;
  min-height: 280px;
  overflow: hidden;
}
</style>

<style lang="less">
.tabs__view {
  & .ant-tabs-tab {
    user-select: none;
    padding: 0 16px 0 0 !important;
    & .ant-dropdown-trigger {
      padding-left: 16px;
    }
  }
  & .ant-tabs-bar {
    margin: 0 0 8px 0;
  }
  & .ant-tabs-tab-active {
    font-weight: normal;
    border-bottom: 1px solid #f0f0f0 !important;
  }
}
</style>
