<template>
	<view class="mine-article">
		<listItem :list="articleList" @loadMore="loadMore" :load="load" source="mine">
		</listItem>
	</view>
</template>

<script>
	import listItem from "@/components/swiper-list/list-item.vue"
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			listItem
		},
		data() {
			return {
				articleList: [],
				load: {
					status: "loading"
				},
				pageNum: 1,
				pageSize: 10,
			};
		},
		onLoad() {
			this.getArticleList()
		},
		computed: {
			...mapState(["userInfo"])
		},
		methods: {
			loadMore() {
				this.pageNum++
				// 如果没有更多数据了，就不继续请求数据了
				if (this.load.status === 'noMore') {
					return
				}
				this.getArticleList()
			},
			getArticleList() {
				this.$api.getArticleList({
					pageSize: this.pageSize,
					pageNum: this.pageNum,
					authorId: this.userInfo.id,
				}).then(res => {
					let listTemp = res.list.map(l => {
						l.images = l.images.split(",");
						l.classify = l.classify.split(",")
						return l;
					})
					// 如果没有更过数据了，那么修改当前的load组件状态
					if (listTemp.length === 0) {
						this.load.status = "noMore"
						return
					}

					// 保留之前的数据
					listTemp = [...this.articleList, ...listTemp]
					// 这里需要使用$set触发更新，不然更新完list，页面不会刷新
					this.articleList = listTemp
				})
			},
		}
	}
</script>

<style lang="scss">
	// 注意整体页面的高度
	page {
		height: 100%;
	}

	.mine-article {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>
