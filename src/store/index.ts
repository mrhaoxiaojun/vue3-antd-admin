import { createStore, ModuleTree } from 'vuex'
import com, { ComState } from './modules/com'
import user, { UserState } from './modules/user'
import tabs, { TabState } from './modules/tabs'
import menu, { menuState } from './modules/menu'
import keepAlive, { keepAliveState } from './modules/keepAlive'

export interface AllState {
  com: ComState,
  user: UserState,
  tabs: TabState,
  menu: menuState
  keepAlive: keepAliveState
}


// 实例化
const store = createStore<AllState>({

  modules: {
    com,
    user,
    tabs,
    menu,
    keepAlive
  }

})

export default store
