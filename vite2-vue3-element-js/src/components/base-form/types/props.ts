import {
  CheckboxGroupOptions,
  DatePickerOptions,
  InputNumberOptions,
  InputOptions,
  RadioGroupOptions,
  RateOptions,
  RichEditorOptions,
  SelectOptions,
  SpanOptions,
  SwitchOptions,
  TreeOptions
} from './options'

export interface Rule {
  required?: boolean
  message: string
  trigger: 'blur' | 'change' | string[]
  type?: string
  min?: number
  max?: number
}

export interface Field {
  // 标签名
  label: string
  // 属性名
  prop: string
  // 需要自定义时，传递此插槽名并进行自定义
  slot?: string
  // 默认值
  defaultValue?: any
  gutter?: number
  span?: number
  offset?: number
  // 是否隐藏
  hidden?: boolean
  // 组件
  type:
    | 'Input'
    | 'Select'
    | 'DatePicker'
    | 'Switch'
    | 'CheckboxGroup'
    | 'RadioGroup'
    | 'Span'
    | 'RichEditor'
    | 'InputNumber'
    | 'Rate'
    | 'Tree'
  options:
    | InputOptions
    | SelectOptions
    | DatePickerOptions
    | SwitchOptions
    | CheckboxGroupOptions
    | RadioGroupOptions
    | SpanOptions
    | RichEditorOptions
    | InputNumberOptions
    | RateOptions
    | TreeOptions
  rules?: Rule | Rule[]
}

export interface BaseFormProps {
  // 禁用表单内所有组件
  disabled?: boolean
  // 是否隐藏必填星号
  hideRequiredAsterisk?: boolean
  // 标签位置
  labelPosition?: 'right' | 'left' | 'top'
  // 标签宽度
  labelWidth?: number
  // 行内表单
  inline?: boolean
  // 表单数据模板
  schemas: Field[]
  // 操作配置
  operation?: {
    // 是否隐藏操作
    showOperation?: boolean
    // 是否显示提交
    showSubmit?: boolean
    // 提交文字
    submitText?: string
    // 提交图标
    submitIcon?: string
    // 是否展示重置
    showReset?: boolean
    // 重置文字
    resetText?: string
    // 重置图标
    resetIcon?: string
  }
}
