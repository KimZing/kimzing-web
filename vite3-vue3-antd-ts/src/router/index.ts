import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/about/about.vue'
import Layout from '@/layout/layout.vue'

const routes = [
  { path:'/', component: Layout },
  { path:'/about', component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
