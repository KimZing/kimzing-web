import { RouteRecordRaw } from 'vue-router'

const aboutRouter: RouteRecordRaw = {
  name: 'about',
  path: '/about',
  redirect: '/about/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'router.about.about',
    transtransition: 'fade',
    permission: false,
    menu: true,
    tag: false,
    bread: false,
    icon: 'el-icon-info',
    cache: false,
    order: 10
  },
  children: [
    {
      name: 'aboutIndex',
      path: '/about/index',
      meta: {
        title: 'router.about.about',
        transition: 'fade',
        permission: false,
        menu: false,
        tag: true,
        bread: true,
        icon: 'el-icon-info',
        cache: false
      },
      component: () => import('@/views/about/index.vue')
    }
  ]
}

export default aboutRouter
