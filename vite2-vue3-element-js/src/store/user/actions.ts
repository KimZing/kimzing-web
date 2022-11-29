import type { ActionTree } from 'vuex'
import { login } from '@/apis/user'
import { Login } from '@/model/user'
import { addUserRoutes, resetRouter } from '@/utils/router'
import router, { allRoutes } from '@/router'
import { getPermissions } from '@/apis/permission'
import { UserActions, UserMutations } from './consts'
import { UserState } from './state'
import { State } from '..'
import { RootMutations } from '../consts'

export const actions = {
  // 使用await async同步等待结果
  async [UserActions.LOGIN]({ commit, dispatch }, loginInfo: Login) {
    // 用户登录
    const loginResult = await login(loginInfo)
    commit(UserMutations.INIT_TOKEN_AND_USER, loginResult)
    // 获取用户权限列表
    await dispatch(UserActions.GET_PERMISSIONS)
  },
  async [UserActions.LOGOUT]({ commit }) {
    // 重置state
    commit(RootMutations.RESET_STATE)
    // 重置路由信息，去除权限路由
    resetRouter(router)
    // 跳转到登录界面
    router.push({ name: 'login' })
  },
  async [UserActions.GET_PERMISSIONS]({ commit, state }) {
    const permissions = await getPermissions(state.user.id)
    commit(UserMutations.INIT_PERMISSIONS, permissions)
    addUserRoutes(
      router,
      allRoutes,
      permissions.menus.map((p) => p.key)
    )
  }
} as ActionTree<UserState, State>
