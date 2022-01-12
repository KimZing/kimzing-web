import { RouteRecordRaw } from 'vue-router'

const lockRouter: RouteRecordRaw = {
  name: 'lock',
  path: '/lock',
  meta: {
    title: '锁屏',
    transition: 'fade',
    permission: false,
    menu: false,
    tag: false,
    bread: false,
    icon: 'el-icon-s-grid',
    cache: true
  },
  component: () => import('@/views/lock/index.vue')
}

export default lockRouter
