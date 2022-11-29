// 用户信息
export interface User {
  id: number
  username: string
  realname: string
  workNumber: string
  lock: string
  roleId?: number
  phone?: string
  email?: string
  position?: string
  createTime?: string
  modifyTime?: string
}

// 登录信息
export interface Login {
  loginType: 'user_name_login' | 'work_number_login'
  loginName: string
  password: string
}

export interface LoginResult {
  userInfo: User
  token: string
}
