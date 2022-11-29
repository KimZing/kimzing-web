import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn'

const element = (app) => {
  app.use(ElementPlus, {size: 'default', locale: zhCn})
  // 添加全局图标组件,可以使用动态组件生成图标
  Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key])
  })
}

export default element
