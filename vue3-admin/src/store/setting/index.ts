import { Module } from 'vuex'
import { State } from '..'
import initState, { SettingState } from './state'
import { mutations } from './mutations'

const state = initState()

export default {
  state,
  mutations
} as Module<SettingState, State>
