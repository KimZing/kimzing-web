import '@/mock'
import Mock from 'mockjs'

export default {
  install() {
    Mock.setup({
      timeout: '50-200'
    })
  }
}
