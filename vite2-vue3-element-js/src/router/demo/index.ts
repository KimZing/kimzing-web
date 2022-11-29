import { RouteRecordRaw } from 'vue-router'
import Parent from '@/layout/parent.vue'
import { features } from '../consts'

const demoRouter: RouteRecordRaw = {
  name: 'demo',
  path: '/demo',
  component: () => import('@/layout/index.vue'),
  redirect: '/demo/form',
  meta: {
    title: 'router.demo.demo',
    transtransition: 'fade',
    permission: true,
    menu: true,
    tag: false,
    bread: true,
    icon: 'el-icon-orange',
    cache: false,
    order: 3
  },
  children: [
    {
      name: 'form',
      path: '/demo/form',
      meta: {
        title: 'router.demo.form',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-s-order',
        cache: false
      },
      component: () => import('@/views/demo/form/index.vue')
    },
    {
      name: 'table',
      path: '/demo/table',
      meta: {
        title: 'router.demo.table',
        transition: 'fade',
        permission: true,
        features: [
          { title: '新增书籍', key: features.table.create },
          { title: '更新书籍', key: features.table.update },
          { title: '删除书籍', key: features.table.delete }
        ],
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-s-grid',
        cache: false
      },
      component: () => import('@/views/demo/table/index.vue')
    },
    {
      name: 'editor',
      path: '/demo/editor',
      meta: {
        title: 'router.demo.editor',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-edit',
        cache: false
      },
      component: () => import('@/views/demo/editor/index.vue')
    },
    {
      name: 'echart',
      path: '/demo/echart',
      component: Parent,
      redirect: '/demo/echart/line',
      meta: {
        title: 'router.demo.echart',
        transtransition: 'fade',
        permission: true,
        menu: true,
        tag: false,
        bread: true,
        icon: 'el-icon-s-marketing',
        cache: false,
        order: 2
      },
      children: [
        {
          name: 'echartLine',
          path: '/demo/echart/line',
          meta: {
            title: 'router.demo.echartLine',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-s-data',
            cache: false
          },
          component: () => import('@/views/demo/echart/line.vue')
        },
        {
          name: 'echartMap',
          path: '/demo/echart/map',
          meta: {
            title: 'router.demo.echartMap',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-s-data',
            cache: false
          },
          component: () => import('@/views/demo/echart/map.vue')
        },
        {
          name: 'echartPie',
          path: '/demo/echart/pie',
          meta: {
            title: 'router.demo.echartPie',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-s-data',
            cache: false
          },
          component: () => import('@/views/demo/echart/pie.vue')
        }
      ]
    },
    {
      name: 'error',
      path: '/demo/error',
      redirect: '/demo/error/404',
      component: Parent,
      meta: {
        title: 'router.demo.error',
        transtransition: 'fade',
        permission: true,
        menu: true,
        tag: false,
        bread: true,
        icon: 'el-icon-warning',
        cache: false
      },
      children: [
        {
          name: 'error404',
          path: '/demo/error/404',
          meta: {
            title: 'router.demo.error404',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-warning-outline',
            cache: false
          },
          component: () => import('@/views/error/404.vue')
        }
      ]
    }
  ]
}

export default demoRouter
