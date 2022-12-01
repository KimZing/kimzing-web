import { createApp } from 'vue'
import './styles/reset.css'
import App from './App.vue'
import Antd from 'plugins/antd'
import router from '@/router'

createApp(App).use(Antd).use(router).mount('#app')
