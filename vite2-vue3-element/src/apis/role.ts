import { Page, PageResult } from '@/model'
import { Role } from '@/model/permission'
import http from '@/utils/http'

// 获取角色分页数据
export const getRolePage = (page: Page, search: any) => {
  return http.get<PageResult<Role>, any>('/role/list', { ...page, ...search })
}

// 创建或更新角色
export const createUpdateRole = (role: Role) => {
  return http.post('/role', role)
}

// 删除角色
export const deleteRole = (row: Role) => {
  return http.delete(`/role/${row.id}`)
}

// 获取所有角色
export const getAllRoleList = () => {
  return http.get<Role[]>('/role/all')
}
