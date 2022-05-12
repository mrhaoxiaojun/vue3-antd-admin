/*
 * @Author: haoxiaojun
 * @Date: 2022-04-02 19:18:46
 * @Details: mapState和computed结合在Vue3版本中的setup使用
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-02 19:19:21
 */
import { computed } from 'vue';
import { mapState, useStore } from 'vuex';
export default function (state: any) {
  // 1. 获取实例 $store
  const store = useStore();
  // 2. 遍历状态数据
  const storeStateFns = mapState(state);
  // 3. 存放处理好的数据对象
  const storeState = {};
  // 4. 对每个函数进行computed
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    // 遍历生成这种数据结构 => {name: ref(), age: ref()}
    storeState[fnKey] = computed(fn);
  });
  return storeState;
}
