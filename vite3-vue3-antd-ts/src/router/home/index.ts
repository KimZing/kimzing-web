import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/home.vue'

const homeRouter: RouteRecordRaw = {
  path: '/home',
  meta: {
    title: '仪表板',
    menu: true,
    icon: 'PieChartOutlined'
  },
  component: Home,
  children: [
    {
      path: '/home2',
      meta: {
        title: '仪表板',
        menu: true,
        icon: 'PieChartOutlined'
      },
      component: Home
    }
  ]
}

export default homeRouter
