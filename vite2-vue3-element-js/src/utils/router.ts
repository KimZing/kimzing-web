import { Router, RouteRecordRaw } from 'vue-router'
import { deepCopy } from './copy'

// 获取常量路由， 包含权限路由下的常量路由
// 使用反向遍历避免删除bug
export const getConstantRoutes = (routes: RouteRecordRaw[]) => {
  for (let index = routes.length - 1; index >= 0; index -= 1) {
    const route = routes[index]
    // 如果为权限路由并且没有子路由，则直接删除
    if (route.meta?.permission !== false && !route.children) {
      routes.splice(index, 1)
    }
    // 如果为权限路由并且有子路由，则接着判断子路由是否有权限路由
    if (route.meta?.permission !== false && route.children) {
      getConstantRoutes(route.children)
      // 如果过滤完子路由为空，则删除此路由
      if (route.children.length === 0) {
        routes.splice(index, 1)
      }
    }
    // 如果为静态路由并且有子路由，则继续判断其子路由中是否包含权限路由
    if (route.meta?.permission === true && route.children) {
      getConstantRoutes(route.children)
    }
    // 如果为静态路由并且没有子路由，则什么都不需要做
  }
  return routes
}

// 获取需要权限的路由
export const getPermissionRoutes = (routes: RouteRecordRaw[]) => {
  for (let index = routes.length - 1; index >= 0; index -= 1) {
    const route = routes[index]
    // 如果是常量路由且没有子路由，则直接去除
    if (!route.meta?.permission && !route.children) {
      routes.splice(index, 1)
    }
    // 如果是常量路由且有子路由，则递归处理
    if (!route.meta?.permission && route.children) {
      getPermissionRoutes(route.children)
      // 如果处理完后常量路由的子路由为空，则移除此常量路由
      if (!route.children || route.children.length === 0) {
        routes.splice(index, 1)
      }
    }
    // 如果是权限路由且没有子路由，则不处理
    // if (route.meta?.permission && !route.children) { }
    // 如果是权限路由且有子路由，则递归处理
    if (route.meta?.permission && route.children) {
      getPermissionRoutes(route.children)
    }
  }
  return routes
}

// 获取用户可以查看的所有路由,包含常量路由和用户拥有的权限路由.
// 同时也会根据该路由生成对应菜单
export const getUserRoutes = (routes: RouteRecordRaw[], permissions: string[]) => {
  for (let index = routes.length - 1; index >= 0; index -= 1) {
    const route = routes[index]
    // 如果是常量路由且没有子路由，则直接不处理
    // if (!r.meta?.permission && !r.children) {}
    // 如果是常量路由且有子路由，则递归处理
    if (!route.meta?.permission && route.children) {
      getUserRoutes(route.children, permissions)
    }
    // 如果是权限路由且没有子路由，则直接判断包不包含在内，不包含在内则直接移除
    if (route.meta?.permission && !route.children && permissions.indexOf(route.path) === -1) {
      routes.splice(index, 1)
    }
    // 如果是权限路由且有子路由，首先判断是否包含在权限内，不包含直接剔除。包含则递归判断子路由
    if (route.meta?.permission && route.children) {
      if (permissions.indexOf(route.path) === -1) {
        routes.splice(index, 1)
      } else {
        getUserRoutes(route.children, permissions)
      }
    }
  }
  return routes
}

// 批量添加路由
const addRoutes = (router: Router, routes: RouteRecordRaw[]) => {
  if (!routes || routes.length === 0) {
    return
  }
  routes.forEach((r) => router.addRoute(r))
  // 这块没太搞懂，参考https://next.router.vuejs.org/zh/guide/advanced/dynamic-routing.html
  // 重新加载当前路由，使用window.location.hash获取当前的页面path， 如果使用router.currentRoute.fullPath会发现其值一直是'/', 导致刷新后只会跳转到主页
  const { hash } = window.location
  router.replace(hash.slice(1, hash.length))
}

export const addUserRoutes = (
  router: Router,
  allRoutes: RouteRecordRaw[],
  permissions: string[]
) => {
  const userRoutes = getUserRoutes(deepCopy(allRoutes), permissions)
  addRoutes(router, userRoutes)
}

/* 重置路由 */
export const resetRouter = (router: Router) => {
  router.getRoutes().forEach((route) => {
    const { name, meta } = route
    if (name && router.hasRoute(name) && meta.permission) {
      router.removeRoute(name)
    }
  })
}
