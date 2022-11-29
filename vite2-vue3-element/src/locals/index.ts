import { computed, watch } from 'vue'
// 避免警告：参考https://blog.csdn.net/hahabboom/article/details/118720592, 但也会导致安装的类型没有提示
import { createI18n } from 'vue-i18n/index'
import store from '@/store'
import en from './lang/en'
import zh from './lang/zh'

const currentLocale = computed(() => store.state.setting.language.current)
const fallbackLocale = computed(() => store.state.setting.language.fallback)

const i18n = createI18n({
  messages: {
    en,
    zh
  },
  locale: currentLocale.value,
  fallbackLocale: fallbackLocale.value
})

watch(currentLocale, (value) => {
  i18n.global.locale = value
})

export const useT = () => {
  return i18n.global.t
}

export default i18n
