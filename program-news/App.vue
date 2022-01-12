<script>
	export default {
		onLaunch: function() {
			this.$api.getUserInfo(1).then(res => {
				this.$store.dispatch("addUserInfo", res)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("/components/gaoyia-parse/parse.css");
	/*每个页面公共css */
</style>
