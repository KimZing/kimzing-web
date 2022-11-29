// 功能结构
export interface Feature {
  id?: number
  // 功能名
  title?: string
  // 唯一标识
  key: string
}

// 菜单权限结构，包含功能
export interface Menu {
  id?: number
  // 权限名
  title?: string
  // 对应的前端路径
  key: string
}

// 角色结构
export interface Role {
  id?: number
  name: string
  key: string
  menus: Menu[]
  features: Feature[]
  status?: boolean
  remark: string
  createTime?: string
  modifyTime?: string
}
