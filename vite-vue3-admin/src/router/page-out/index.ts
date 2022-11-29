import { RouteRecordRaw } from 'vue-router'

const pageOutRouter: RouteRecordRaw = {
  name: 'pageout',
  path: '/pageout',
  component: () => import('@/layout/index.vue'),
  redirect: '/pageout/vuex',
  meta: {
    title: 'router.page.page',
    transtransition: 'fade',
    permission: false,
    menu: true,
    tag: false,
    bread: true,
    icon: 'el-icon-location-outline',
    cache: false,
    order: 4
  },
  children: [
    {
      name: 'page',
      path: '/pageout/page/:pathMatch(.*)',
      meta: {
        title: 'router.page.page',
        transition: 'fade',
        permission: false,
        menu: false,
        tag: false,
        bread: false,
        icon: 'el-icon-connection',
        cache: false
      },
      props: true,
      component: () => import('@/views/page-out/index.vue')
    },
    {
      name: 'page-list',
      path: '/pageout/page-list',
      meta: {
        title: 'router.page.list',
        transition: 'fade',
        permission: false,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-connection',
        cache: false
      },
      props: true,
      component: () => import('@/views/page-out/page-list/index.vue')
    },
    {
      name: 'vue',
      path: '/pageout/vue',
      meta: {
        title: 'router.page.vue',
        transition: 'fade',
        permission: false,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-connection',
        cache: false
      },
      component: () => import('@/views/page-out/vue/index.vue')
    },
    {
      name: 'vuex',
      path: '/pageout/vuex',
      meta: {
        title: 'router.page.vuex',
        transition: 'fade',
        permission: false,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-connection',
        cache: false
      },
      component: () => import('@/views/page-out/vuex/index.vue')
    },
    {
      name: 'vue-router',
      path: '/pageout/vue-router',
      meta: {
        title: 'router.page.vuerouter',
        transition: 'fade',
        permission: false,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-connection',
        cache: false
      },
      component: () => import('@/views/page-out/vue-router/index.vue')
    },
    {
      name: 'element-plus',
      path: '/pageout/element-plus',
      meta: {
        title: 'router.page.elementplus',
        transition: 'fade',
        permission: false,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-connection',
        cache: false
      },
      component: () => import('@/views/page-out/element-plus/index.vue')
    }
  ]
}

export default pageOutRouter
