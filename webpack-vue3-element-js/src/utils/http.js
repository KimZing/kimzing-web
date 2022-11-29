import axios from 'axios'
import storage from '@/utils/storage'

// 创建Axios实例,设置通用信息
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})
// 添加所有请求方法中的认证header
service.defaults.headers.common['x-source'] = 'web'
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers.Authorization = storage.getItem('token')
        return config
    },
    (error) => {
        return Promise.reject(error)
    })
// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const {code, data, message} = response.data
        // 数据正常直接返回data
        if (code === '0' || code === 0) {
            return data
        }
        // 数据错误进行提示
        if (code) {
            console.warn({code, message})
            return Promise.reject()
        }
        // 其他错误处理
        console.error(response)
        return Promise.reject('Unknown Error')
    }
)

export default service