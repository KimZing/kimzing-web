import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/home.vue'

const homeRouter: RouteRecordRaw = {
  path: '/home',
  meta: {
    title: '仪表板',
    menu: true,
    icon: 'PieChartOutlined'
  },
  component: Home
}

export default homeRouter
