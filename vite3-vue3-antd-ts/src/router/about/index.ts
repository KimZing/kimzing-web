import { RouteRecordRaw } from 'vue-router'
import About from '@/views/about/about.vue'

const aboutRouter: RouteRecordRaw = {
  path: '/about',
  meta: {
    title: '关于',
    menu: true,
    icon: 'MailOutlined'
  },
  component: About
}
export default aboutRouter
