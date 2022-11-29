import type { RouteRecordRaw } from 'vue-router'
import { Feature, Menu, Role } from '@/model/permission'
import { allRoutes } from '@/router'
import { deepCopy } from '@/utils/copy'
import { getPermissionRoutes } from '@/utils/router'
import { useT } from '@/locals'

const t = useT()

interface TreeMenu {
  title: string
  key: string
  type: 'menu' | 'feature'
  children?: TreeMenu[]
}

// 将路由转换为权限结构
const convertRoutesToPermissionTree = (permissionRoutes: RouteRecordRaw[], menus: TreeMenu[]) => {
  permissionRoutes.forEach((p) => {
    // 构建当前Menu树
    const menu: TreeMenu = { title: t(p.meta!.title), key: p.path, type: 'menu' }
    // 提前初始化children
    menu.children = menu.children ? menu.children : []
    // 如果有功能权限，则把功能权限当做菜单进行织入
    if (p.meta?.features && p.meta.features.length > 0) {
      const features: TreeMenu[] = p.meta.features.map((f) => ({
        title: f.title!,
        key: f.key,
        type: 'feature'
      }))
      menu.children.push(...features)
    }
    // 如果有子路由则递归添加
    if (p.children && p.children.length > 0) {
      convertRoutesToPermissionTree(p.children, menu.children)
    }
    menus.push(menu)
  })
  return menus
}

// 获取权限树，包含菜单和功能
export const getPermissionTree = () => {
  // 获取权限路由
  const permissionRoutes = getPermissionRoutes(deepCopy(allRoutes))
  // 创建权限菜单树
  const permissionTree: TreeMenu[] = []
  // 将权限路由转换为权限树结构
  convertRoutesToPermissionTree(permissionRoutes, permissionTree)
  return permissionTree
}

// 在提交表单时，将通过tree组件选择的菜单和功能转换为role中的menus和features
export const convertTreeOfStateToRoleStruct = (state: any): Role => {
  const { permissions } = state
  const menus: Menu[] = []
  const features: Feature[] = []
  permissions.forEach((p: any) => {
    if (p.type === 'menu') {
      menus.push(p)
    }
    if (p.type === 'feature') {
      features.push(p)
    }
  })
  const role: Role = { ...state, menus, features }
  return role
}
