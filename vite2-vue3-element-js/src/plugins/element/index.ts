import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import { computed } from 'vue'
import store from '@/store'

const size = computed(() => store.state.setting.size.element)

const element = (app: any): void => {
  app.use(ElementPlus, { size: size.value })
}

export default element
