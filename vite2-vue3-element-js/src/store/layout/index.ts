import { Module } from 'vuex'
import { State } from '..'
import initState, { LayoutState } from './state'
import { mutations } from './mutaions'

const state = initState()

export default {
  state,
  mutations
} as Module<LayoutState, State>
