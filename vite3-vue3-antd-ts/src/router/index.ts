import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import 'vue-router'
import Layout from '@/layout/layout.vue'
import homeRouter from '@/router/home'
import aboutRouter from '@/router/about'
import Error404 from '@/views/error/404.vue'

// 扩展路由中的meta类型
declare module 'vue-router' {
  interface RouteMeta {
    // 菜单标题
    title: string
    // 是否显示菜单
    menu: boolean
    // 图标
    icon?: string
  }
}

const children: RouteRecordRaw[] = []
children.push(homeRouter)
children.push(aboutRouter)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home', component: Layout, children },
    { path: '/:pathMatch(.*)*', component: Error404 }
  ]
})

// 导航守卫 参数(to: 要进入的路由 from: 要离开的路由)  返回值(正常路由: true,undefined  指定路由: {name: Login}  取消路由: false)
router.beforeEach(async () => {
  return true
})

export default router
