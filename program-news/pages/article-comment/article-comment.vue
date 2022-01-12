<template>
	<view class="comment">
		<comment v-for="item in commentList" :item="item" :key="item.id" @deleteItem="deleteComment"></comment>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentList: [],
				articleId: 0
			};
		},
		onLoad(options) {
			this.articleId = options.articleId
			this.getCommentList(this.articleId)
		},
		methods: {
			getCommentList(articleId) {
				this.$api.getCommentList({
						pageSize: 10,
						pageNum: 1,
						articleId
					})
					.then(res => {
						this.commentList = res.list
					})
			},
			deleteComment(commentId) {
				uni.showLoading({})
				this.$api.deleteComment(commentId)
					.then(res => {
						uni.hideLoading()
						uni.showToast({
							title: "删除成功",
							icon: "none"
						})
						this.getCommentList(this.articleId)
					}).catch(err => {
						uni.hideLoading()
					})
			}
		}
	}
</script>

<style lang="scss">
	.comment {
		padding-bottom: 10px;
	}
</style>
