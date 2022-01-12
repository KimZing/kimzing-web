import request from '@/utils/http.js'
import {host} from '@/common/constants.js'
import store from '@/store/index.js'

export const getUserInfo = (userId) => {
	return request({
		url: host + "/user/" + userId,
		method: "GET"
	})
}