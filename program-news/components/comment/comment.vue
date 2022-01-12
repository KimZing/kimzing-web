<template>
	<view class="comment">
		<view class="comment-header">
			<view class="header-avatar">
				<image :src="item.commentUser.avatar" mode="aspectFill"></image>
			</view>
			<view class="header-info">
				<text class="info-username">{{item.commentUser.username}}</text>
				<text class="info-date">{{item.createTime}}</text>
			</view>
		</view>
		<view class="comment-content">
			{{item.content}}
		</view>
		<uni-icons type="close" color="#fc4416" size="24" class="icon-clear" @click="deleteItem(item.id)"></uni-icons>
	</view>
</template>

<script>
	export default {
		name: "comment",
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			deleteItem(itemId) {
				this.$emit("deleteItem", itemId)
			}
		}
	}
</script>

<style lang="scss">
	.comment {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha:0.1);
		box-sizing: border-box;
		.comment-header {
			display: flex;
			.header-avatar {
				width: 50px;
				height: 50px;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%
				}
			}
			.header-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 10px;
				font-size: 14px;
				.info-username {
					color: #333333
				}
				.info-date {
					color: #999999;
				}
			}
		}
		.comment-content {
			margin-top: 10px;
			color: #333333;
			font-size: 16px;
		}
	}
	.icon-clear {
		position: absolute;
		top: 5px;
		right: 5px;
	}
</style>
