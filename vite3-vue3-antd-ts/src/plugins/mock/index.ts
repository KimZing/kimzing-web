import '@/mock/index'
import Mock from 'mockjs'

export default {
  install() {
    // do nothing
    Mock.setup({
      timeout: '50-200'
    })
  }
}
