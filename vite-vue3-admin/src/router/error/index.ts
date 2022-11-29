import { RouteRecordRaw } from 'vue-router'

const errorRouter: RouteRecordRaw = {
  name: 'notfound',
  path: '/:pathMatch(.*)',
  meta: {
    title: 'Not Found',
    transition: 'fade',
    permission: false,
    menu: false,
    tag: false,
    bread: true,
    icon: 'el-icon-s-grid',
    cache: true,
    parent: 'none'
  },
  component: () => import('@/views/error/404.vue')
}

export default errorRouter
