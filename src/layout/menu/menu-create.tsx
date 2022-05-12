import { defineComponent, Slots } from 'vue';
import { RouterObj } from '@/types/api/login';
import AIcon from '@/components/aicon/AIcon.vue';
export default defineComponent({
  components: {
    AIcon,
  },
  props: {
    router: {
      type: Object,
      required: true,
    },
  },
  render() {
    const menuSub = (router: RouterObj) => {
      const subSlots: Slots = {
        title: () => [<span>{router.name}</span>],
        icon: () => [<AIcon type={router.icon || 'FolderOutlined'} />],
      };
      return (
        <a-sub-menu v-slots={subSlots} key={router.key}>
          {router.children && router.children.map((item) => menuCreate(item))}
        </a-sub-menu>
      );
    };

    const menuItem = (router: RouterObj) => {
      const itemSlots: Slots = {
        icon: () => (router.icon ? [<AIcon type={router.icon || ''} />] : []),
      };
      return (
        <a-menu-item v-slots={itemSlots} key={router.key}>
          <router-link to={router.path}>{router.name}</router-link>
        </a-menu-item>
      );
    };

    const menuCreate = (router: RouterObj) => {
      if (router.children && !router.hidden) {
        return menuSub(router);
      } else if (!router.hidden) {
        return menuItem(router);
      }
    };

    return menuCreate(this.router as RouterObj);
  },
});
