import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { App } from 'vue'

export default{
  install (app: App, ...options: any[]) {
    app.use(Antd)
  }
}