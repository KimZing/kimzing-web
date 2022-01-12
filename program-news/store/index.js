import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		historyList: uni.getStorageSync("historyList") || [],
		userInfo: uni.getStorageSync("userInfo") || {}
	},
	mutations: {
		setHistoryList(state, historyList) {
			state.historyList = historyList

		},
		clearHistoryList(state) {
			state.historyList = []
		},
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	actions: {
		addHistory({
			commit,
			state
		}, history) {
			// 排除空搜索
			if (history === "") return

			// 加入到列表
			let list = state.historyList
			if (list.indexOf(history) > -1) {
				return
			}
			list.unshift(history)
			uni.setStorageSync("historyList", list)
			commit("setHistoryList", list)
		},
		clearHistoryList({
			commit,
			store
		}) {
			uni.removeStorageSync("historyList")
			commit("clearHistoryList")
		},
		addUserInfo({commit, state}, userInfo) {
			uni.setStorageSync("userInfo", userInfo)
			commit("setUserInfo", userInfo)
		}
	}
})

export default store;
