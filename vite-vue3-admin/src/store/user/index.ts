import { Module } from 'vuex'
import { State } from '..'
import initState, { UserState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

const state = initState()

export default {
  state,
  mutations,
  actions
} as Module<UserState, State>
