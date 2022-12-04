import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
  title: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state() {
    return {
      title: 'Vite3 Vue3 Antd TS',
      test: 123
    }
  },
  mutations: {}
})

export function useStore() {
  return baseUseStore(key)
}
