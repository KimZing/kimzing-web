import { bindApiOfMenuOrFeature, userPermission } from '../data/permission'
import { mock } from '../utils/mock'

// 获取用户权限列表
mock('/permission/[0-9].*', 'get', userPermission, '获取用户权限')

// 绑定菜单、功能与api的关系
mock('/permission', 'post', null, '绑定api到菜单/功能')

// 获取菜单功能绑定的api
mock('/permission/type/key', 'get', bindApiOfMenuOrFeature, '获取菜单/功能绑定的api')
