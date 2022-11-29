import { createApp } from 'vue'
// Sass 通用样式表
import sass from '@/plugins/sass'
// ElementPlus 组件库
import element from '@/plugins/element'
// iconfont图标库
import '@/assets/iconfont/iconfont.css'
// VueRouter 路由
import router from '@/router/index'
// Vuex 状态管理
import store, { injectionKey } from '@/store/index'
// 数据mock，仅当mock环境生效
import mock from './plugins/mock'
// 多语言
import i18n from './locals'
import app from './App.vue'

createApp(app)
  .use(element)
  .use(sass)
  .use(mock)
  .use(i18n)
  .use(store, injectionKey)
  .use(router)
  .mount('#app')
