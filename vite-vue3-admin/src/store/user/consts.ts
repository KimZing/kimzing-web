// 之所以多加个前缀，是方便之后的导入
enum UserMutations {
  INIT_TOKEN_AND_USER = 'user/initTokenAndUser',
  INIT_PERMISSIONS = 'user/initPermissions'
}

enum UserActions {
  LOGIN = 'user/login',
  LOGOUT = 'user/logout',
  GET_PERMISSIONS = 'user/getPermissions'
}

export { UserActions, UserMutations }
