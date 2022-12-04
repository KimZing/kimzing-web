import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.variable.min.css'
import { App } from 'vue'
import { ConfigProvider } from 'ant-design-vue'

export default {
  install(app: App, color: string) {
    //  设置主题色, 可动态更改
    ConfigProvider.config({
      theme: {
        primaryColor: color
      }
    })
    app.use(Antd)
  }
}
