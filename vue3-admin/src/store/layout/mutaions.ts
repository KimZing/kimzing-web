import { MutationTree } from 'vuex'
import { LayoutMutations } from './consts'
import { LayoutState } from './state'

export const mutations = {
  [LayoutMutations.CHANGE_MENU_COLLAPSE](state): void {
    state.menuCollapse = !state.menuCollapse
  },
  [LayoutMutations.CHANGE_SETTING_VISIBLE](state, status: boolean): void {
    state.settingVisible = status
  },
  [LayoutMutations.CHANGE_LOCK_DIALOG_VISIBLE](state, status: boolean): void {
    state.lockDialogVisible = status
  },
  [LayoutMutations.CHANGE_PASSWORD_DIALOG_VISIBLE](state, status: boolean): void {
    state.passwordDialogVisible = status
  },
  [LayoutMutations.LOCK](state, payload): void {
    state.lockInfo = payload
  },
  [LayoutMutations.UNLOCK](state): void {
    state.lockInfo = { isLock: false, lockPassword: '' }
  },
  [LayoutMutations.SET_TAGS](state, tags) {
    state.tags = tags
  }
} as MutationTree<LayoutState>
