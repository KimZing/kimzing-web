import { RouteRecordRaw } from 'vue-router'
import Parent from '@/layout/parent.vue'

const multiMenuRouter: RouteRecordRaw = {
  name: 'multimenu',
  path: '/multimenu',
  component: () => import('@/layout/index.vue'),
  redirect: '/multimenu/menu21',
  meta: {
    title: 'router.multimenu.menu',
    transtransition: 'fade',
    permission: true,
    menu: true,
    tag: true,
    bread: true,
    icon: 'el-icon-menu',
    cache: false,
    order: 3
  },
  children: [
    {
      name: 'menu21',
      path: '/multimenu/menu21',
      meta: {
        title: 'router.multimenu.menu21',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-menu',
        cache: false
      },
      component: () => import('@/views/demo/multi-menu/menu21.vue')
    },
    {
      name: 'menu22',
      path: '/multimenu/menu22',
      redirect: '/multimenu/menu41',
      meta: {
        title: 'router.multimenu.menu22',
        transition: 'fade',
        permission: true,
        menu: true,
        tag: true,
        bread: true,
        icon: 'el-icon-menu',
        cache: false
      },
      component: Parent,
      children: [
        {
          name: 'menu31',
          path: '/multimenu/menu31',
          redirect: '/multimenu/menu41',
          meta: {
            title: 'router.multimenu.menu31',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-menu',
            cache: false
          },
          component: Parent,
          children: [
            {
              name: 'menu41',
              path: '/multimenu/menu41',
              meta: {
                title: 'router.multimenu.menu41',
                transition: 'fade',
                permission: true,
                menu: true,
                tag: true,
                bread: true,
                icon: 'el-icon-menu',
                cache: false
              },
              component: () => import('@/views/demo/multi-menu/menu41.vue')
            },
            {
              name: 'menu42',
              path: '/multimenu/menu42',
              meta: {
                title: 'router.multimenu.menu42',
                transition: 'fade',
                permission: true,
                menu: true,
                tag: true,
                bread: true,
                icon: 'el-icon-menu',
                cache: false
              },
              component: () => import('@/views/demo/multi-menu/menu42.vue')
            }
          ]
        },
        {
          name: 'menu32',
          path: '/multimenu/menu32',
          meta: {
            title: 'router.multimenu.menu32',
            transition: 'fade',
            permission: true,
            menu: true,
            tag: true,
            bread: true,
            icon: 'el-icon-s-grid',
            cache: false
          },
          component: () => import('@/views/demo/multi-menu/menu32.vue')
        }
      ]
    }
  ]
}

export default multiMenuRouter
