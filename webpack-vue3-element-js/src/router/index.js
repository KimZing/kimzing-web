import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'
import Error404 from '@/views/demo/error/404'
import menus from '@/router/data/menu'
import storage from '@/utils/storage'

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: menus,
        meta: {title: '主页'}
    },
    {
        path: '/login',
        component: Login
    },
    {
        name: 'notfound',
        path: '/:pathMatch(.*)',
        component: Error404
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

const isAuthenticated = () => {
    const user = storage.getItem('user')
    if (user === null) return false
    if (user.token) return true
    return false
}

router.beforeEach((to, from, next) => {
    // 如果跳转路径不是登录页，并且没有进行认证,则跳转到登录页
    if (to.path !== '/login' && !isAuthenticated()) {
        next({path: '/login'})
    } else {
        next()
    }
})

export default router