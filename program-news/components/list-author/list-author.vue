<template>
	<view class="author">
		<view class="author-header">
			<view class="header-avatar">
				<image :src="author.avatar"></image>
			</view>
		</view>
		<view class="author-content">
			<view class="content-name">
				{{author.username}}
			</view>
			<view class="content-info">
				<view class="info-position">{{author.position}}</view>
				<view class="info-count">
					<text class="count-article">文章 {{author.articleCount}}</text>
					<text class="count-fans">粉丝 {{author.fansCount}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "list-author",
		props: {
			author: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.author {
		display: flex;
		box-sizing: border-box;
		margin: 10px;
		height: 80px;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha:0.1);
		.author-header {
			.header-avatar {
				width: 60px;
				height: 60px;
				border-radius: 5px;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.author-content {
			width: 100%;
			height: 100%;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.content-name {
				color: #333333;
			}
			.content-info {
				color: #999999;
				display: flex;
				justify-content: space-between;
				align-items: center;
				text:first-child {
					margin-right: 10px;
				}
			}
		}
	}
</style>
