import { Feature } from '@/model/permission'
import 'vue-router'

declare module 'vue-router' {
  // 约束或者说是扩展路由中的meta，
  interface RouteMeta {
    // 标题(菜单及tag标题)
    title: string
    // 切换到动画效果，以后可以添加不同动效并扩展该字段
    transition?: string
    // 是否需要权限, 需要权限的会动态加载，不需要权限的会直接加载。
    permission?: boolean
    // 功能列表，最终的界面
    features?: Feature[]
    // 是否显示在菜单
    menu?: boolean
    // 是否显示在标签页
    tag?: boolean
    // 是否固定在标签栏
    tagFix?: boolean
    // 是否显示在面包屑上
    bread?: boolean
    // 图标
    icon?: string
    // 是否缓存该路由页面
    cache?: boolean
    // 排序，数值越小排序越靠前
    order?: number
  }
}
