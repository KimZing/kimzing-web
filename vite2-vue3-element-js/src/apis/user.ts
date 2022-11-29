import { Page, PageResult } from '@/model'
import { Login, LoginResult, User } from '@/model/user'
import http from '@/utils/http'

// 用户登录
export const login = (loginInfo: Login) => http.post<LoginResult, Login>('/user/login', loginInfo)

// 获取用户分页数据
export const getUserPage = (page: Page, search: any) => {
  return http.get<PageResult<User>, any>('/user/list', { ...page, ...search })
}

// 创建或更新用户
export const createUpdateUser = (user: User) => {
  return http.post('/user', user)
}

export const deleteUser = (user: User) => {
  return http.delete(`/user/${user.id}`)
}

// 锁定或解锁用户
export const updateUserLock = (id: number, lock: string) => {
  return http.put(`/user/${id}/lock/${lock}`)
}

// 修改用户密码
export const modifyUserPassword = (data: { id: number; password: string }) => {
  return http.put('/user/password', data)
}

// 普通用户修改自己的密码
export const modifyUserSelfPassword = (data: { id: number; password: string }) => {
  return http.put('/user/self/password', data)
}
