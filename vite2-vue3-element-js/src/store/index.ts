import { InjectionKey } from 'vue'
import createPersistedState from 'vuex-persistedstate'
import { Store, createStore, useStore } from 'vuex'
import storage from '@/utils/storage'
import { deepCopy } from '@/utils/copy'
import { UserState } from './user/state'
import { SettingState } from './setting/state'
import { LayoutState } from './layout/state'
import { RootMutations } from './consts'

// 通过模块解析获取所有的store模块
const storeFiles = import.meta.globEager('./**/index.ts')
const modules = {}
// 遍历所有文件最终获取所有modules
Object.keys(storeFiles).forEach((key) => {
  // 排除当前目录的文件
  if (storeFiles[key] && key !== './index.ts') {
    const subStore = storeFiles[key]
    // 取最后一级目录最为module名
    const paths = key.split('/')
    const moduleName = paths[paths.length - 2]
    Object.assign(modules, { [moduleName]: subStore.default })
  }
})

// 通过模块解析获取所有的state初始状态
const stateFiles = import.meta.globEager('./*/state.ts')
const moduleStates = {}
// 遍历所有文件最终获取所有modules
Object.keys(stateFiles).forEach((key) => {
  // 排除当前目录的文件
  if (stateFiles[key]) {
    const moduleState = stateFiles[key].default
    // 取最后一级目录最为module名
    const paths = key.split('/')
    const module = paths[paths.length - 2]
    Object.assign(moduleStates, { [module]: moduleState() })
  }
})

// 这样的做法相当于是取巧了，但取巧的刚刚好。可以拥有类型提示，而又不会导致在state：{}中书写类型导致的变量覆盖问题
export interface State {
  layout: LayoutState
  setting: SettingState
  user: UserState
}

// 创建一个injectionKey
export const injectionKey: InjectionKey<Store<State>> = Symbol()

const store = createStore({
  // 仅允许通过mutation操作store
  strict: true,
  state: {} as State,
  // 仅支持同步
  mutations: {
    // 利用约定的方式initState进行统一初始化所有State
    [RootMutations.RESET_STATE](state) {
      // 这里一定要重新拷贝一份，不然登录后退出再登录，就会引用到原始对象
      const newModuleStates = deepCopy(moduleStates)
      Object.keys(state).forEach((key) => {
        const prop = key as keyof State
        const initProp = key as keyof typeof newModuleStates
        if (state[prop] && newModuleStates[initProp]) {
          state[prop] = newModuleStates[initProp]
        }
      })
    }
  },
  // 支持异步，使用store.dispatch进行分发
  actions: {},
  modules,
  plugins: [
    // 某些时候需要清空整个state的时候可以使用链接中的方法,https://github.com/robinvdvleuten/vuex-persistedstate/issues/88, 这里有我提交的重置方案，哈哈
    createPersistedState({
      key: 'kim-vue-admin',
      storage
    })
  ]
})

export default store

// 定义自己的 `useStore` 组合式函数, 直接返回带类型的store，避免重复书写
export function useTypeStore() {
  return useStore(injectionKey)
}
