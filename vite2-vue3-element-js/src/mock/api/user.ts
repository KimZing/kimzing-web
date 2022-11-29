import { loginResult, userList } from '../data/user'
import { createPage, mock } from '../utils/mock'

// 用户登录
mock('/user/login', 'post', loginResult, '用户登录')

// 获取用户分页数据
mock('/user/list', 'get', createPage(userList), '获取用户列表')

// 创建或更新用户
mock('/user', 'post', null, '创建/更新用户')

// 删除用户
mock('/user/[0-9].*', 'delete', null, '删除用户')

// 锁定或解锁用户
mock('/user/[0-9].*/lock/[0,1]', 'put', null, '锁定/解锁用户')

// 修改用户密码
mock('/user/password', 'put', null, '修改密码')

// 修改用户自身密码
mock('/user/self/password', 'put', null, '修改密码')
