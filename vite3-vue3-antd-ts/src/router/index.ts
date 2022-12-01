import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import About from '@/views/about/about.vue'

const routes = [
  { path:'/', component: Home },
  { path:'/about', component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
