import service from '@/utils/http'

// 新增用户
export const createUser = (data) => {
    return service.post('/user', data)
}

// 删除用户
export const removeUser = (id) => {
    return service.delete(`/user/${id}`)
}

// 更新用户
export const updateUser = (data) => {
    return service.put('/user', data)
}

// 查询用户列表（分页） params结构：{pageNum: 当前页, pageSize: 分页大小, key: value}
export const getUserList = (params) => {
    return service.get('/user/list', {params})
}

