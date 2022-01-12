const request = (options) => {
	const {
		url,
		method,
		data
	} = options
	// TODO 修改统一获取
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			success: (res) => {
				if (res.data.code === '0') {
					resolve(res.data.data)
				} else {
					resolve(res.data.message)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export default request