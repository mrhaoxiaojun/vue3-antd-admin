<template>
  <div class="layout__header">
    <div class="header__left">
      <!-- 展开收起 -->
      <template v-if="setting.layout === 'side' && setting.menuUnfold">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="$emit('update:collapsed', !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="$emit('update:collapsed', !collapsed)" />
      </template>

      <!-- logo -->
      <div v-if="setting.layout === 'head'" class="menu__logo">
        <div class="menu__logo-icon">
          <img src="@/assets/imgs/layout/logo.png" />
        </div>
        <span v-show="!collapsed">{{ t('layout.head.systemName') || setting.systemName }}</span>
      </div>
    </div>
    <!-- 右侧菜单 -->
    <div class="header__right">
      <!-- 头部一级菜单 -->
      <div class="group__tabs">
        <a-tabs :active-key="activeKey" @tabClick="tabClick">
          <a-tab-pane v-for="item in routers" :key="item.id" :tab="item.name" />
        </a-tabs>
      </div>
      <LocalePicker v-if="setting.Internationalization" />
      <a-dropdown :trigger="['click', 'hover']">
        <div class="header__avatar">
          <a-avatar>
            <template #icon>
              <img v-if="avatar.length > 0" :src="avatar" />
              <img v-else src="@/assets/imgs/layout/avatar.jpg" />
            </template>
          </a-avatar>
          <div class="header__avatar-name">
            {{ name.length > 0 ? name : 'admin' }}
          </div>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="logout()">
              <template #icon>
                <a-icon type="PoweroffOutlined" />
              </template>
              {{ t('user.signOut') || '退出登录' }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, computed } from 'vue';
import router from '@/router';
import { mapState, useStore } from 'vuex';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import AIcon from '@/components/aicon/AIcon.vue';
import LocalePicker from './LocalePicker.vue';
import { RouterObj, RouterTable } from '@/types/api/login';
import config from '@/config';
import { useI18n } from 'vue-i18n';
import * as api from '@/services/modules/login';
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'Header',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AIcon,
    LocalePicker,
  },
  props: {
    collapsed: {
      required: true,
      type: Boolean,
    },
  },
  emits: ['update:collapsed'],
  setup() {
    const setting = config.setting;

    const store = useStore();
    const { t } = useI18n();

    const activeKey = computed(() => store.state.menu.menuId);

    // 退出登录
    const logout = () => {
      api
        .logout()
        .then(() => {
          localStorage.removeItem('token');
          router.push('/login');
        })
        .catch((err) => {
          message.error(err.message || err.data.message);
        });
    };

    // 切换tab
    const tabClick = (e: number) => {
      store.commit('menu/setId', e);
    };

    // 监控menuId变化后改变当前menu状态
    watch(activeKey, () => {
      // tabClick(activeKey.value);
      const e = activeKey.value;

      const routers = store.state.user.routers;
      let menuRouter: RouterTable = [];
      routers.forEach((item: RouterObj) => {
        if (item.id === e) {
          menuRouter = item.children || [];
        }
      });

      store.commit('menu/setMenu', menuRouter);

      // 在header点击时多做了一次赋值不碍事，非header切换路由时需要此内容
      store.commit('menu/setId', e);

      // menuRouter只有动态路由或者static.router.ts，白名单路由等不含，需要判断过滤出去
      if (menuRouter[0]?.path) {
        router.push(menuRouter[0]?.path);
      }
    });

    // onBeforeMount(() => {
    //   tabClick(activeKey.value);
    // });

    return { logout, tabClick, activeKey, setting, t };
  },
  computed: {
    ...mapState({
      name: (state: any) => state.user.name,
      avatar: (state: any) => state.user.avatar,
      routers: (state: any) => {
        const array: any[] = [];
        state.user.routers.forEach((item: any) => {
          if (!item.hidden) array.push(item);
        });
        return array;
      },
    }),
  },
});
</script>
<style lang="less" scoped>
.menu__logo {
  display: flex;
  align-items: center;
  // padding-left: 24px;
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
    // color: #fff;
  }
}

.layout__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  font-size: 20px;
  & .header__left {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  & .header__right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
    :deep(.ant-tabs-bar) {
      margin: 0;
      border: none;
    }
    & .group__tabs {
      margin-left: 22px;
      flex-grow: 1;
    }

    & .header__avatar {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      & .header__avatar-name {
        margin-left: 6px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>
