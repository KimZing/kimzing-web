import { createApp } from 'vue'
import './styles/reset.css'
import App from './App.vue'
import Antd from '@/plugins/antd'

createApp(App).use(Antd).mount('#app')
