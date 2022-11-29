export const apiList = [
  {
    id: 1,
    path: '/user/role/list',
    method: 'get',
    remark: '用户:分页查询',
    createTime: '2021-08-20T11:23:32',
    modifyTime: '2021-08-20T11:23:32'
  },
  {
    id: 2,
    path: '/user/role',
    method: 'post',
    remark: '用户:创建或更新',
    createTime: '2021-08-20T11:23:46',
    modifyTime: '2021-08-20T11:24:37'
  },
  {
    id: 3,
    path: '/user/{userId}/lock/{lockStatus}',
    method: 'put',
    remark: '用户:禁用或启用',
    createTime: '2021-08-20T11:24:32',
    modifyTime: '2021-08-20T19:00:19'
  },
  {
    id: 4,
    path: '/user/password',
    method: 'put',
    remark: '用户:修改密码',
    createTime: '2021-08-20T11:24:52',
    modifyTime: '2021-08-20T11:24:52'
  },
  {
    id: 5,
    path: '/role/list',
    method: 'get',
    remark: '角色:分页查询',
    createTime: '2021-08-20T11:25:18',
    modifyTime: '2021-08-20T11:25:18'
  },
  {
    id: 6,
    path: '/role',
    method: 'post',
    remark: '角色:创建或更新角色',
    createTime: '2021-08-20T11:25:40',
    modifyTime: '2021-08-20T19:00:27'
  },
  {
    id: 7,
    path: '/role/{roleId}',
    method: 'delete',
    remark: '角色:删除角色',
    createTime: '2021-08-20T11:26:08',
    modifyTime: '2021-08-20T11:26:08'
  },
  {
    id: 8,
    path: '/role/all',
    method: 'get',
    remark: '角色:获取所有角色',
    createTime: '2021-08-20T11:26:28',
    modifyTime: '2021-08-20T11:26:28'
  },
  {
    id: 10,
    path: '/permission',
    method: 'post',
    remark: '权限:菜单、功能与API绑定',
    createTime: '2021-08-20T11:27:34',
    modifyTime: '2021-08-20T11:27:34'
  },
  {
    id: 11,
    path: '/permission/type/key',
    method: 'get',
    remark: '权限:获取菜单功能绑定的api',
    createTime: '2021-08-20T11:27:56',
    modifyTime: '2021-08-20T11:27:56'
  }
]

export const allAPI = [
  {
    id: 1,
    path: '/user/role/list',
    method: 'get',
    remark: '用户:分页查询',
    createTime: '2021-08-20T11:23:32',
    modifyTime: '2021-08-20T11:23:32'
  },
  {
    id: 2,
    path: '/user/role',
    method: 'post',
    remark: '用户:创建或更新',
    createTime: '2021-08-20T11:23:46',
    modifyTime: '2021-08-20T11:24:37'
  },
  {
    id: 3,
    path: '/user/{userId}/lock/{lockStatus}',
    method: 'put',
    remark: '用户:禁用或启用',
    createTime: '2021-08-20T11:24:32',
    modifyTime: '2021-08-20T19:00:19'
  },
  {
    id: 4,
    path: '/user/password',
    method: 'put',
    remark: '用户:修改密码',
    createTime: '2021-08-20T11:24:52',
    modifyTime: '2021-08-20T11:24:52'
  },
  {
    id: 5,
    path: '/role/list',
    method: 'get',
    remark: '角色:分页查询',
    createTime: '2021-08-20T11:25:18',
    modifyTime: '2021-08-20T11:25:18'
  },
  {
    id: 6,
    path: '/role',
    method: 'post',
    remark: '角色:创建或更新角色',
    createTime: '2021-08-20T11:25:40',
    modifyTime: '2021-08-20T19:00:27'
  },
  {
    id: 7,
    path: '/role/{roleId}',
    method: 'delete',
    remark: '角色:删除角色',
    createTime: '2021-08-20T11:26:08',
    modifyTime: '2021-08-20T11:26:08'
  },
  {
    id: 8,
    path: '/role/all',
    method: 'get',
    remark: '角色:获取所有角色',
    createTime: '2021-08-20T11:26:28',
    modifyTime: '2021-08-20T11:26:28'
  },
  {
    id: 10,
    path: '/permission',
    method: 'post',
    remark: '权限:菜单、功能与API绑定',
    createTime: '2021-08-20T11:27:34',
    modifyTime: '2021-08-20T11:27:34'
  },
  {
    id: 11,
    path: '/permission/type/key',
    method: 'get',
    remark: '权限:获取菜单功能绑定的api',
    createTime: '2021-08-20T11:27:56',
    modifyTime: '2021-08-20T11:27:56'
  },
  {
    id: 12,
    path: '/interface/list',
    method: 'get',
    remark: '接口:分页数据',
    createTime: '2021-08-20T11:28:34',
    modifyTime: '2021-08-20T11:28:34'
  },
  {
    id: 13,
    path: '/interface',
    method: 'post',
    remark: '接口:创建或更新API',
    createTime: '2021-08-20T11:28:52',
    modifyTime: '2021-08-20T11:28:52'
  },
  {
    id: 14,
    path: '/interface/{apiId}',
    method: 'delete',
    remark: '接口:删除API',
    createTime: '2021-08-20T11:29:19',
    modifyTime: '2021-08-20T11:29:19'
  },
  {
    id: 15,
    path: '/interface/all',
    method: 'get',
    remark: '接口:查询所有接口',
    createTime: '2021-08-20T11:29:35',
    modifyTime: '2021-08-20T11:29:35'
  }
]
