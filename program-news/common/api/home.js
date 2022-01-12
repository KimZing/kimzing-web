import request from '../../utils/http.js'
import {host} from '@/common/constants.js'
import store from '@/store/index.js'

// 获取所有标签
export const getAllLabel = (data) => {
	return request({
		url: host + "/label/all",
		data,
	})
}

// 分页获取文章列表
export const getArticleList = (data) => {
	const {
		classify,
		pageNum,
		pageSize,
		authorId
	} = data;
	return request({
		url: host + "/article/list?pageNum=" + pageNum + "&pageSize=" + pageSize,
		method: "POST",
		data: {
			userId: store.state.userInfo.id,
			classify,
			authorId
		}
	})
}

// 根据关键词搜索文章
export const searchArticle = (data) => {
	// pageSize pageNum search userId
	return request({
		url: host + "/article/search",
		method: "GET",
		data: {
			...data,
			userId: store.state.userInfo.id,
		}
	})
}

// 批量更新标签信息
export const updateLabelList = (labelList) => {
	return request({
		url: host + "/label/list",
		method: "PUT",
		data: labelList
	})
}


// 更新当前用户的文章收藏状态
export const updateArticleLike = (articleId) => {
	return request({
		url: host + "/article/like",
		method: "PUT",
		data: {
			articleId,
			userId: store.state.userInfo.id,
		}
	})
}

// 获取文章详情
export const getArticleDetail = (articleId) => {
	return request({
		url: host + "/article/" + articleId,
		method: "GET",
		data: {
			userId: store.state.userInfo.id,
		}
	})
}

// 关注或取消关注作者
export const followAuthor = (authorId) => {
	return request({
		url: host + "/user/follow",
		method: "GET",
		data: {
			userId: store.state.userInfo.id,
			authorId
		}
	})
}

export const addComment = (data) => {
	return request({
		url: host + "/comment",
		method: "POST",
		data: {
			userId: store.state.userInfo.id,
			...data
		}
	})
}

// 分页获取评论列表
export const getCommentList = (data) => {
	const {
		articleId,
		pageNum,
		pageSize
	} = data;
	return request({
		url: host + "/comment/list?pageNum=" + pageNum + "&pageSize=" + pageSize,
		method: "POST",
		data: {
			articleId
		}
	})
}

export const deleteComment = (commentId) => {
	return request({
		url: host + "/comment/" + commentId,
		method: "DELETE"
	})
}