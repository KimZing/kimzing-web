import { createApp } from 'vue'
import './styles/reset.css'
import './styles/global.css'
import App from './App.vue'
import Antd from '@/plugins/antd'
import mock from '@/plugins/mock'
import router from '@/router'
import { store, key } from '@/store'

createApp(App).use(Antd, '#25b864').use(router).use(store, key).use(mock).mount('#app')
