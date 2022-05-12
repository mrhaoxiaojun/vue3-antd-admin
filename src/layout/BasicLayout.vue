<template>
  <!-- layout head模式，配置路由BasicLayout和BasicLayoutNoSide来区分是否需要side -->
  <a-layout v-if="layout === 'head'" class="layout">
    <!-- 头部 -->
    <a-layout-header class="header">
      <layout-header v-model:collapsed="collapsed" />
    </a-layout-header>

    <a-layout>
      <!-- 侧边 -->
      <a-layout-sider
        v-if="isSideBar === 'Y'"
        v-model:collapsed="collapsed"
        width="256"
        :trigger="null"
        collapsible
      >
        <layout-menu :collapsed="collapsed" />
      </a-layout-sider>
      <!-- 内容 -->
      <a-layout-content class="container">
        <layout-tabs v-if="multiPage" />
        <blank-view v-else />
      </a-layout-content>
    </a-layout>
  </a-layout>

  <!-- layout side模式 -->
  <a-layout v-else class="layout">
    <!-- 侧边 -->
    <a-layout-sider v-model:collapsed="collapsed" width="256" :trigger="null" collapsible>
      <layout-menu :collapsed="collapsed" />
    </a-layout-sider>

    <a-layout>
      <!-- 头部 -->
      <a-layout-header class="header">
        <layout-header v-model:collapsed="collapsed" />
      </a-layout-header>

      <!-- 内容 -->
      <a-layout-content class="container">
        <layout-tabs v-if="multiPage" />
        <blank-view v-else />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import layoutHeader from '@/layout/header/Header.vue';
import layoutMenu from '@/layout/menu/Menu.vue';
import layoutTabs from '@/layout/tabs/LayoutTabs.vue';
import BlankView from '@/layout/BlankView.vue';
import config from '@/config';

const route = useRoute();

// 监听到变化,是否显示sidebar
const isSideBar = ref<string>(route.meta.sideBar);
console.log(0, isSideBar.value);
watch(
  () => route.path,
  () => {
    console.log(1, isSideBar.value);
    isSideBar.value = route.meta.sideBar;
  }
);

const { layout, multiPage } = config.setting;
const collapsed = ref<boolean>(false);
</script>

<style lang="less" scoped>
.layout {
  overflow: hidden;
  height: 100vh;
  & .header {
    background-color: #fff;
    padding: 0;
  }
  & .container {
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  & .container::-webkit-scrollbar {
    width: 6px;
  }
  & .container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #c1c1c1;
  }
  & .container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #ededed;
  }
}
</style>

<style lang="less">
.layout {
  & .ant-layout-sider-children {
    overflow-y: auto;
    overflow-x: hidden;
  }
  & .ant-layout-sider-children::-webkit-scrollbar {
    width: 4px;
  }
  & .ant-layout-sider-children::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #535353;
  }
  & .ant-layout-sider-children::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #ededed;
  }
}
</style>
