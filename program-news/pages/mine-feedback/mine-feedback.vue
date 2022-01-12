<template>
	<view class="feedback">
		<view class="feedback-content">
			<view class="title">
				意见反馈:
			</view>
			<view class="content">
				<textarea v-model="content" placeholder="请输入您要反馈的问题" />
			</view>
		</view>
		<view class="feedback-image">
			<view class="title">
				反馈图片:
			</view>
			<view class="images">
				<view class="image-box" v-for="(item,index) in imageList" :key="index" >
					<uni-icons class="close-icon" type="closeempty" size="18" color="#fff" @click="deleteImage(index)">
					</uni-icons>
					<view class="image-item" @click="previewImage(index)">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</view>
				<view v-if="imageList.length < 5" class="image-box" @click="chooseImage">
					<view class="image-item">
						<uni-icons type="plusempty" size="50" color="#DDD"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<button class="feedback-button" type="primary" @click="submitFeedback">提交反馈</button>
	</view>
</template>

<script>
	import {
		host
	} from "@/common/constants.js"
	export default {
		data() {
			return {
				content: "",
				imageList: []
			};
		},
		methods: {
			chooseImage() {
				let count = 5 - this.imageList.length
				uni.chooseImage({
					count: count,
					sourceType: ["album", "camera"],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths
						tempFilePaths.forEach((t, index) => {
							if (index < count) {
								this.imageList.push({
									url: t
								})
							}
						})
					}
				})
			},
			deleteImage(index) {
				this.imageList.splice(index, 1)
			},
			submitFeedback() {
				
				
				let all= []
				this.imageList.forEach((image, index) => {
					let p = uni.uploadFile({
						url: host + "/common/upload",
						filePath: image.url,
						name: 'file',
						formData: {
							"content": this.content
						},
					})
					all.push(p)
				})
				
				Promise.all(all).then(res => {uni.showToast({
					title: "提交成功",
					icon: "snow"
				})})
				
				uni.showToast({
					title: "正在提交中",
					icon: "snow"
				})
				
			},
			previewImage(index) {
				uni.previewImage({
					urls: this.imageList.map(item => item.url),
					current: index
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		padding: 0px 10px;
	}

	.feedback {
		display: flex;
		flex-direction: column;

		.feedback-content {
			display: flex;
			flex-direction: column;

			.content {
				padding: 5px 5px;
				border: 1px #EEE solid;
				border-radius: 5px;
				box-sizing: border-box;

				textarea {
					font-size: 14px;
				}
			}
		}

		.feedback-image {
			display: flex;
			flex-direction: column;

			.images {
				display: flex;
				flex-wrap: wrap;
				padding: 10px;

				.image-box {
					position: relative;
					width: 33.33%;
					height: 0;
					padding-top: 33.33%;
					box-sizing: border-box;

					.close-icon {
						background-color: #ff5a5f;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						width: 20px;
						height: 20px;
						top: 0;
						right: 0;
						z-index: 2;
					}

					.image-item {
						border: 1px #EEE solid;
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						top: 5px;
						left: 5px;
						right: 5px;
						bottom: 5px;
						border-radius: 5px;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.feedback-button {
			margin: 0 15px;
			background-color: $main-color;
			font-size: 16px;
		}
	}

	.title {
		margin: 15px 0;
		color: #999999;
		font-size: 15px;
	}
</style>
