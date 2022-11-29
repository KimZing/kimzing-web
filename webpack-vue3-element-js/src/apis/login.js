import service from '@/utils/http'

// 用户登录接口
export const login = (data) => {
    return service.post('/system/login', data)
}
