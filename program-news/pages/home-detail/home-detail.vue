<template>
	<view class="detail">
		<view class="detail-title">
			{{params.title}}
		</view>
		<view class="detail-header">
			<view class="header-avatar">
				<image :src="params.avatar" mode="aspectFill"></image>
			</view>
			<view class="header-info">
				<view class="info-name">
					{{params.username}}
				</view>
				<view class="info-meta">
					<text>{{params.createTime}}</text>
					<text>{{params.readCount}} 浏览</text>
				</view>
			</view>
			<button type="default" class="header-follow"
				@click="followAuthor">{{articleInfo.isFollow?'取消关注':'关注'}}</button>
		</view>
		<view class="detail-content">
			<u-parse :content="articleInfo.content" :noData="noData"></u-parse>
		</view>
		<view class="detail-bottom">
			<view class="bottom-input" @click="openPop">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#1296db"></uni-icons>
			</view>
			<view class="bottom-icons">
				<view class="icon-item">
					<uni-icons type="chat" size="22" color="#1296db" @click="openComment"></uni-icons>
				</view>
				<view class="icon-item">
					<uni-icons :type="articleInfo.isLike ? 'heart-filled':'heart'" size="22" color="#F03737"
						@click="clickLike"></uni-icons>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" fixed :maskClick="false">
			<view class="popup">
				<view class="popup-header">
					<text class="header-item" @click="clickPopupCancle">取消</text>
					<text class="header-item" @click="clickPopupConfirm">发布</text>
				</view>
				<view class="popup-content">
					<textarea placeholder="请出入评论内容" maxlength="200" focus="true" v-model="content"></textarea>
					<text>{{content.length}}/200</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uParse,
			uniPopup
		},
		data() {
			return {
				params: {},
				articleInfo: {},
				noData: '<text style="text-align:center;font-size:14px;color:#999">文章数据加载中。。。</text>',
				content: ''
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.params)
			this.$api.getArticleDetail(this.params.id).then(res => this.articleInfo = res)
		},
		methods: {
			openComment() {
				uni.navigateTo({
					url: "/pages/article-comment/article-comment?articleId=" + this.articleInfo.id
				})
			},
			followAuthor() {
				uni.showLoading({})
				this.$api.followAuthor(this.articleInfo.authorId)
					.then(res => {
						uni.hideLoading()
						uni.showToast({
							title: this.articleInfo.isFollow ? '取消关注成功' : "关注成功",
							icon: "none"
						})
						this.articleInfo.isFollow = !this.articleInfo.isFollow
						uni.$emit("updateFollow")
					}).catch(err => {
						uni.hideLoading()
					})
			},
			clickPopupCancle() {
				this.$refs.popup.close()
			},
			clickPopupConfirm() {
				this.addComment({
					content: this.content,
					articleId: this.articleInfo.id
				})
				this.$refs.popup.close()
			},
			addComment(data) {
				uni.showLoading({})
				if (data.content === '') return
				this.$api.addComment(data).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "评论成功",
						icon: "none"
					})
					this.content = ''
				}).catch(err => {
					uni.hideLoading()
					uni.showToast({
						title: "评论失败",
						icon: "none"
					})
				})
			},
			openPop() {
				this.$refs.popup.open()
			},
			clickLike() {
				this.articleInfo.isLike = !this.articleInfo.isLike
				uni.showLoading()
				this.$api.updateArticleLike(this.articleInfo.id).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: this.articleInfo.isLike ? "收藏成功" : "取消收藏",
						icon: 'none'
					})
					// 触发更新时间
					uni.$emit("updateArticle", "detail")
				}).catch(e => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.detail {
		padding: 0px 10px;
		padding-top: 10px;
		padding-bottom: 54px;
		display: flex;
		flex-direction: column;
	}

	.detail-title {
		font-size: 18px;
		color: #333333;
		font-weight: bold;
	}

	.detail-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10px;

		.header-avatar {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			overflow: hidden;
			border-radius: 20%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.header-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 14px;
			width: 100%;
			padding-left: 10px;

			.info-name {
				color: #333;
			}

			.info-meta {
				color: #999;

				text {
					font-size: 12px;
					margin-right: 5px;
				}
			}
		}

		.header-follow {
			color: #FFF;
			background-color: $main-color;
			font-size: 12px;
			flex-shrink: 0;
			margin-right: 10px;
		}
	}

	.detail-content {
		padding-top: 10px;
	}

	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 44px;
		display: flex;
		align-items: center;
		border-top: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;

		.bottom-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 30px;
			padding: 0 10px;
			margin-left: 10px;
			border: 1px #dddddd solid;
			border-radius: 5px;

			text {
				font-size: 14px;
				color: #999;
			}
		}

		.bottom-icons {
			display: flex;
			flex-shrink: 0;
			justify-content: space-between;
			align-items: center;
			padding: 0 10px;

			.icon-item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}

	.popup {
		background-color: #FFFFFF;

		.popup-header {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px #F5F5F5 solid;
			padding: 0 15px;

			.header-item {
				color: #666;
				font-size: 14px;
				height: 50px;
				line-height: 50px;
			}
		}

		.popup-content {
			display: flex;
			flex-direction: column;
			padding: 5px 10px;
			font-size: 14px;

			textarea {
				width: 100%;
				height: 200px;
			}

			text {
				align-self: flex-end;
				font-size: 12px;
				color: #999999;
			}
		}
	}
</style>
