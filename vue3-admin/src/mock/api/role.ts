import { allRole, roleList } from '../data/role'
import { createPage, mock } from '../utils/mock'

// 获取角色分页数据
mock('/role/list', 'get', createPage(roleList), '获取角色列表')

// 创建或更新角色
mock('/role', 'post', null, '创建/更新角色')

// 删除角色
mock('/role/[0-9].*', 'delete', null, '删除角色')

// 获取所有角色
mock('/role/all', 'get', allRole, '获取所有角色')
