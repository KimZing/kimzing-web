import { Feature, Menu } from '@/model/permission'
import http from '@/utils/http'

// 获取用户权限列表
export const getPermissions = (id: number) =>
  http.get<{ menus: Menu[]; features: Feature[] }>(`/permission/${id}`)

// 绑定菜单、功能与api的关系
export const saveMenuOrFeatureToAPI = (request: {
  permission: { key: string; type: string }
  api: number[]
}) => http.post('/permission', request)

// 获取菜单功能绑定的api
export const getAPIOfMenuOrFeature = (data: { type: string; key: string }) => {
  return http.get<number[], typeof data>('/permission/type/key', data)
}
