import { RouteRecordRaw } from 'vue-router'

const homeRouter: RouteRecordRaw = {
  name: 'home',
  path: '/',
  component: () => import('@/layout/index.vue'),
  redirect: '/home',
  meta: {
    title: 'router.home.home',
    transtransition: 'fade',
    permission: true,
    menu: true,
    tag: false,
    bread: false,
    icon: 'el-icon-s-home',
    cache: false,
    order: 1
  },
  children: [
    {
      name: 'homeIndex',
      path: '/home',
      meta: {
        title: 'router.home.dashboard',
        transition: 'fade',
        permission: true,
        menu: false,
        tag: true,
        tagFix: true,
        bread: true,
        icon: 'el-icon-s-home',
        cache: false
      },
      component: () => import('@/views/home/index.vue')
    }
  ]
}

export default homeRouter
