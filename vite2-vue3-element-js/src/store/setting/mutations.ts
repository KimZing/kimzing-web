import { MutationTree } from 'vuex'
import { SettingMutations } from './consts'
import initState, { SettingState } from './state'

export const mutations = {
  [SettingMutations.RESET](state, attrs: Array<keyof SettingState>) {
    const defaultState = initState()
    attrs.forEach((attr) => {
      state[attr] = defaultState[attr] as any
    })
  },
  [SettingMutations.RESET_ALL](state) {
    const defaultState = initState()
    Object.keys(state).forEach((key) => {
      const prop = key as keyof SettingState
      state[prop] = defaultState[prop] as any
    })
    state = defaultState
  },
  // 这里的size使用了never类型，因为ts检测到size下既有string又有number报错，但实际上此处的语法应该是没问题的，感觉是ts的缺陷
  [SettingMutations.CHANGE_SIZE](
    state,
    payload: { name: keyof SettingState['size']; size: never }
  ) {
    state.size[payload.name] = payload.size
  },
  [SettingMutations.CHANGE_VISIBLE](
    state,
    payload: { name: keyof SettingState['visible']; visible: boolean }
  ) {
    state.visible[payload.name] = payload.visible
  },
  [SettingMutations.CHANGE_COLOR](
    state,
    payload: { name: keyof SettingState['color']; color: string }
  ) {
    state.color[payload.name] = payload.color
  },
  [SettingMutations.CHANGE_CURRENT_LANGUAGE](state, language: string) {
    state.language.current = language
  }
} as MutationTree<SettingState>
