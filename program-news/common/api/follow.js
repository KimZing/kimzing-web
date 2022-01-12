import request from '../../utils/http.js'
import {host} from '@/common/constants.js'
import store from '@/store/index.js'

// 分页查询用户喜欢的文章
export const getUserLikeArticleList = (data) => {
	// pageSize pageNum userId
	return request({
		url: host + "/article/like",
		method: "GET",
		data: {
			...data,
			userId: store.state.userInfo.id
		}
	})
}

// 查询用户关注的所有作者
export const getUserFollowAuthorList = () => {
	return request({
		url: host + "/user/follow/authors",
		method: "GET",
		data: {
			userId: store.state.userInfo.id
		}
	})
}


