import { computed } from 'vue'
import store from '@/store'

const features = computed(() => store.state.user.features)

// 判断是否包含某个功能权限
export const hasPermission = (key: string): boolean => {
  if (!features.value || features.value.length === 0) {
    return false
  }
  if (features.value.indexOf(key) === -1) {
    return false
  }
  return true
}
