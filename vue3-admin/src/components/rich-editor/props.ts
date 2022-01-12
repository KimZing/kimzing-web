import type { RawEditorSettings } from 'tinymce'
import type { PropType } from 'vue'
import { plugins, toolbar } from './config'

const tinymcProps = {
  modelValue: {
    type: String as PropType<string>,
    default: ''
  },
  options: {
    type: Object as PropType<Partial<RawEditorSettings>>,
    default: {}
  },
  menu: {
    type: String as PropType<boolean | string>,
    default: 'file edit insert view format table'
  },
  toolbar: {
    type: Array as PropType<string[]>,
    default: toolbar
  },
  plugins: {
    type: Array as PropType<string[]>,
    default: plugins
  },
  height: {
    type: [Number, String] as PropType<string | number>,
    required: false,
    default: '400'
  },
  width: {
    type: [Number, String] as PropType<string | number>,
    required: false,
    default: 'auto'
  },
  language: {
    type: String as PropType<'zh' | 'en'>,
    default: 'zh'
  },
  skin: {
    type: String as PropType<'oxide' | 'oxide-dark'>,
    default: 'oxide'
  },
  uploadUrl: {
    type: String as PropType<string>,
    default: '#'
  },
  headers: {
    type: Object as PropType<object>,
    default: () => ({})
  }
}

export default tinymcProps
