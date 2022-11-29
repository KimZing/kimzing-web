import {createApp} from 'vue'
import App from './App.vue'
import sass from '@/plugins/sass'
import element from '@/plugins/element'
import router from '@/router'
import store from '@/store'

const app = createApp(App)
// 配置插件
app.use(sass)
    .use(element)
    .use(router)
    .use(store)
    .mount('#app')
