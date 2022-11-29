import { RouteRecordRaw } from 'vue-router'

const loginRouter: RouteRecordRaw = {
  name: 'login',
  path: '/login',
  meta: {
    title: '登录',
    transition: 'fade',
    permission: false,
    menu: false,
    tag: false,
    bread: false,
    icon: 'el-icon-s-grid',
    cache: true
  },
  component: () => import('@/views/login/index.vue')
}

export default loginRouter
