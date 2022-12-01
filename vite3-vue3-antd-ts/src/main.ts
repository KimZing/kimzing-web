import { createApp } from 'vue'
import './styles/reset.css'
import App from './App.vue'
import Antd from 'plugins/antd'
import mock from 'plugins/mock'
import router from '@/router'

createApp(App).use(Antd).use(router).use(mock).mount('#app')
