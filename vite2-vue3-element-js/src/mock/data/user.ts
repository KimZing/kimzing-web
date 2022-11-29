import type { LoginResult } from '@/model/user'

export const loginResult: LoginResult = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiMDAwMDAwIiwiaWF0IjoxNjI5NDMwMjY5LCJleHAiOjE2MzAwMzUwNjl9.uvGb-BlXNkxvP486Exr2o9AI1EnifNJmkyWcIe85hxw',
  userInfo: {
    id: 1,
    workNumber: '000000',
    username: 'admin',
    realname: '超级管理员',
    position: 'TECH_CHAIR',
    phone: '18888888888',
    email: 'superadmin@pateo.com.cn',
    lock: '0',
    createTime: '2021-08-20T11:20:33',
    modifyTime: '2021-08-20T11:22:47'
  }
}

export const userList = [
  {
    id: 3,
    workNumber: '1000',
    username: 'zhangsan',
    realname: '张三',
    position: 'BOT_DEVELOPER',
    phone: '15890908888',
    email: 'zhangsan@kimzing.com',
    lock: '0',
    createTime: '2021-08-20T16:15:56',
    modifyTime: '2021-08-20T16:15:56',
    roleId: 2,
    roleName: '后端研发'
  },
  {
    id: 2,
    workNumber: '2000',
    username: 'lisi',
    realname: '李四',
    position: 'BOT_DEVELOPER',
    phone: '18652002253',
    email: 'lisi@kimzing.com',
    lock: '0',
    createTime: '2021-08-20T14:21:22',
    modifyTime: '2021-08-20T14:21:22',
    roleId: 3,
    roleName: '前端研发'
  },
  {
    id: 1,
    workNumber: '000000',
    username: 'admin',
    realname: '超级管理员',
    position: 'TECH_CHAIR',
    phone: '18888888888',
    email: 'admin@kimzing.com',
    lock: '0',
    createTime: '2021-08-20T11:20:33',
    modifyTime: '2021-08-20T11:22:47',
    roleId: 1,
    roleName: '超级管理员'
  }
]
