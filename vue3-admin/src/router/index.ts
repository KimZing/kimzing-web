import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
import store from '@/store'
import { UserActions } from '@/store/user/consts'
import { deepCopy } from '@/utils/copy'
import { getConstantRoutes } from '@/utils/router'
import notice from '@/utils/notice'

/* 
  扫描所有路由，将路由分为常量路由和权限路由，同时对路由进行组装, 可以实现无限层级路由
  注意：路由配置需以default方式导出（也可以改进此代码，支持非默认方式导出）
 */
const routerFiles = import.meta.globEager('./**/index.ts')
// 所有路由集合
const allRoutes: RouteRecordRaw[] = []
// 遍历所有文件
Object.keys(routerFiles).forEach((key) => {
  // 如果存在，并且不是当前目录的index.ts
  if (routerFiles[key] && key !== './index.ts') {
    const exportRouters = routerFiles[key]
    // 获取所有路由信息
    allRoutes.push(exportRouters.default)
  }
})

const allSoredRoutes = allRoutes.sort((a, b) => {
  if (a.meta && !a.meta.order) {
    a.meta.order = 9999
  }
  if (b.meta && !b.meta.order) {
    b.meta.order = 9999
  }
  return a.meta!.order! - b.meta!.order!
})
// 导出排序后的所有路由
export { allSoredRoutes as allRoutes }

const router = createRouter({
  history: createWebHashHistory(),
  // 获取所有层级的静态路由并添加
  routes: getConstantRoutes(deepCopy(allRoutes))
})

// 导航守卫，可以对每次的路由做判断拦截，前面的lock界面、登录注册界面都是常量路由，无需进行动态路由处理。所以把动态路由放在后面
router.beforeEach(async (to, from, next) => {
  // 1. 锁屏相关判断
  const lockInfo = computed(() => store.state.layout.lockInfo)

  // 如果是锁屏状态并且跳转的是锁屏界面，则直接放行
  if (lockInfo.value.isLock && to.name === 'lock') {
    next()
    return
  }

  // 如果是锁屏状态并且跳转的不是锁屏界面，则跳转到锁屏界面
  if (lockInfo.value.isLock && to.name !== 'lock') {
    next({ name: 'lock' })
    return
  }

  // 2. 登录相关判断
  const token = computed(() => store.state.user.token)
  // 2.1 如果没有token， 并且访问的是登录页或者注册页，则直接放行
  if (!token.value && (to.name === 'login' || to.name === 'register')) {
    next()
    return
  }

  // 2.2 如果没有token，并且访问的不是登录页或者注册页，则跳转到登录页
  if (!token.value && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' })
    return
  }

  // 3.动态路由相关判断
  const index = router
    .getRoutes()
    .map((r) => r.meta.permission)
    .indexOf(true)
  // 如果不包含权限路由（刷新页面时，路由信息会重置），则重新获取路由信息并添加动态路由
  if (index === -1) {
    await store.dispatch(UserActions.GET_PERMISSIONS)
    // 如果菜单为空则进行退出登录操作，并提示权限问题。如果不这样操作，在登录后会因为没有权限而循环跳转
    if (!store.state.user.permissions || store.state.user.permissions.length === 0) {
      notice('您无权限访问本系统', '请联系管理员进行授权', 'error')
      store.dispatch(UserActions.LOGOUT)
      return
    }
  }

  // 3.1 如果有token，并且访问的是登录页或者注册页，则转到主页
  if (token.value && (to.name === 'login' || to.name === 'register')) {
    next({ path: '/' })
    return
  }
  // 3.2. 有token，并且访问的不是登录页、注册页，则直接放行
  next()
})

export default router
