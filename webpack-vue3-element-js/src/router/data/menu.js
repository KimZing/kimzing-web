import Home from '@/views/home'
import Table from '@/views/demo/table'
import Form from '@/views/demo/form'
import Bar from '@/views/demo/chart/bar'
import Line from '@/views/demo/chart/line'
import Map from '@/views/demo/chart/map'
import Pie from '@/views/demo/chart/pie'
import All from '@/views/demo/chart/all'
import About from '@/views/about'
import Empty from '@/layout/empty'
import Error404 from '@/views/demo/error/404'

// 图标到https://element-plus.gitee.io/zh-CN/component/icon.html进行查找，复制名称即可
const menus = [
    {
        // 页面路径
        path: '/home',
        // 对应的页面组件
        component: Home,
        meta: {
            // 菜单栏中的名称
            title: '首页',
            // 菜单栏中的图标
            icon: 'HomeFilled'
        }
    },
    {
        path: '/demo',
        // 指定该层级中默认激活哪个页面
        redirect: '/demo/form',
        component: Empty,
        meta: {
            title: '示例',
            icon: 'Help'
        },
        children: [
            {
                path: '/demo/form',
                component: Form,
                meta: {
                    title: '表单',
                    icon: 'List'
                }
            },
            {
                path: '/demo/table',
                component: Table,
                meta: {
                    title: '表格',
                    icon: 'Grid'
                }
            },
            {
                path: '/demo/error',
                redirect: '/demo/error/404',
                component: Empty,
                meta: {
                    title: '错误',
                    icon: 'Grid'
                },
                children: [
                    {
                        path: '/demo/error/404',
                        component: Error404,
                        meta: {
                            title: '404',
                            icon: 'TrendCharts'
                        }
                    }
                ]
            },
            {
                path: '/demo/chart',
                redirect: '/demo/chart/bar',
                component: Empty,
                meta: {
                    title: '图表',
                    icon: 'Histogram'
                },
                children: [
                    {
                        path: '/demo/chart/bar',
                        component: Bar,
                        meta: {
                            title: '柱状图',
                            icon: 'TrendCharts'
                        }
                    },
                    {
                        path: '/demo/chart/line',
                        component: Line,
                        meta: {
                            title: '折线图',
                            icon: 'TrendCharts'
                        }
                    },
                    {
                        path: '/demo/chart/map',
                        component: Map,
                        meta: {
                            title: '地形图',
                            icon: 'TrendCharts'
                        }
                    },
                    {
                        path: '/demo/chart/pie',
                        component: Pie,
                        meta: {
                            title: '扇形图',
                            icon: 'TrendCharts'
                        }
                    },
                    {
                        path: '/demo/chart/all',
                        component: All,
                        meta: {
                            title: '综合',
                            icon: 'TrendCharts'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于',
            icon: 'Promotion'
        }
    }
]

export default menus