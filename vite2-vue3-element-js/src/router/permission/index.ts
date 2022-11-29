import { RouteRecordRaw } from 'vue-router'
import { features } from '../consts'

const permissionRouter: RouteRecordRaw = {
  name: 'permission',
  path: '/permission',
  component: () => import('@/layout/index.vue'),
  redirect: '/permission/user',
  meta: {
    title: 'router.permission.permission',
    transtransition: 'fade',
    permission: true,
    menu: true,
    tag: false,
    bread: true,
    icon: 'el-icon-lock',
    cache: false,
    order: 3
  },
  children: [
    {
      name: 'user',
      path: '/permission/user',
      meta: {
        title: 'router.permission.user',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-user',
        cache: false,
        features: [
          { title: '新增用户', key: features.user.create },
          { title: '删除用户', key: features.user.delete },
          { title: '更新用户', key: features.user.update },
          { title: '查询用户', key: features.user.read }
        ]
      },
      component: () => import('@/views/permission/user/index.vue')
    },
    {
      name: 'role',
      path: '/permission/role',
      meta: {
        title: 'router.permission.role',
        transtransition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-rank',
        cache: false
      },
      component: () => import('@/views/permission/role/index.vue')
    },
    {
      name: 'api',
      path: '/permission/api',
      meta: {
        title: 'router.permission.api',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-circle-plus-outline',
        cache: false
      },
      component: () => import('@/views/permission/api/index.vue')
    },
    {
      name: 'authorization',
      path: '/permission/authorization',
      meta: {
        title: 'router.permission.authorization',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-setting',
        cache: false
      },
      component: () => import('@/views/permission/authorization/index.vue')
    }
  ]
}

export default permissionRouter
