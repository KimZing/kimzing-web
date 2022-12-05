import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.variable.min.css'
import { App } from 'vue'
import * as icons from '@ant-design/icons-vue'
import { ConfigProvider } from 'ant-design-vue'

export default {
  install(app: App, color: string) {
    //  设置主题色, 可动态更改
    ConfigProvider.config({
      theme: {
        primaryColor: color
      }
    })
    // 设置全局图标
    app.config.globalProperties.$icons = icons
    // 安装
    app.use(Antd)
  }
}
