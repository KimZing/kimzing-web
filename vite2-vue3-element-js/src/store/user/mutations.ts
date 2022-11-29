import { MutationTree } from 'vuex'
import { LoginResult } from '@/model/user'
import { UserMutations } from './consts'
import { UserState } from './state'
import { Feature, Menu } from '@/model/permission'

export const mutations = {
  [UserMutations.INIT_TOKEN_AND_USER](state, loginResult: LoginResult) {
    state.token = loginResult.token
    state.user = loginResult.userInfo
  },
  [UserMutations.INIT_PERMISSIONS](state, permissions: { menus: Menu[]; features: Feature[] }) {
    state.permissions = permissions.menus.map((p) => p.key)
    state.features = permissions.features.map((f) => f.key)
  }
} as MutationTree<UserState>
