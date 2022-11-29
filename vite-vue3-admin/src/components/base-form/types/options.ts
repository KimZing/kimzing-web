export interface InputOptions {
  type: 'text' | 'textarea' | 'password'
  formatter?: (value: string) => string
  maxlength?: number
  showWordLimit?: boolean
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  prefixIcon?: string
  suffixIcon?: string
  prefixText?: string
  suffixText?: string
  rows?: number
  autosize?: boolean
  autofocus?: boolean
}

export interface SelectOption {
  label: string
  value: any
  disabled?: boolean
}

// 为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
export interface SelectOptions {
  multiple?: boolean
  multipleLimit?: number
  disabled?: boolean
  clearable?: boolean
  placeholder?: string
  options: SelectOption[]
  filterable?: boolean
  remote?: boolean
  remoteMethod?: (value: string, options: SelectOption[]) => void
}

export interface DatePickerOptions {
  type: 'year' | 'month' | 'date' | 'week' | 'datetime' | 'datetimerange' | 'daterange'
  readonly?: boolean
  disabled?: boolean
  editable?: boolean
  clearable?: boolean
  placeholder?: string
  startPlaceholder?: string
  endPlaceholder?: string
  format?: string
  valueFormat?: string
  rangeSeparator?: string
}

export interface SwitchOptions {
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  activeValue?: any
  inactiveValue?: any
  activeColor?: string
  inactiveColor?: string
}

export interface CheckboxGroupOptions {
  group: {
    disabled?: boolean
    min?: number
    max?: number
  }
  checkboxes: {
    name: string
    label: string
    value: string
    disabled?: boolean
    checked?: boolean
  }[]
}

export interface RadioGroupOptions {
  group: { disabled: boolean }
  radios: {
    label: string
    value: string
    disabled?: boolean
  }[]
}

export interface SpanOptions {
  value: string
}

export interface RichEditorOptions {
  menu?: string | boolean
  toolbar?: string[]
  plugins?: string[]
  height?: string | number
  width?: string | number
  language: 'zh' | 'en'
  skin?: 'oxide' | 'oxidedark'
  uploadUrl: string
  headers?: object
}

export interface InputNumberOptions {
  min?: number
  max?: number
  step?: number
  stepStrictly?: boolean
  precision?: number
  size?: 'large' | 'medium' | 'small' | 'mini'
  disabled?: boolean
  controls?: boolean
  controlsPosition?: 'right' | undefined
  name?: string
  label?: string
  placeholder?: string
}

export interface RateOptions {
  max?: number
  disabled?: boolean
  allowHalf?: boolean
  lowThreshold?: number
  highThreshold?: number
  colors?: string[]
  voidColor?: string
  disabledVoidColor?: string
  iconClasses?: string[]
  voidIconClass?: string
  disabledVoidIconClass?: boolean
  showText?: boolean
  showScore?: boolean
  textColor?: string
  texts?: string[]
  scoreTemplate?: string
}

interface TreeProp {
  label: string | ((data: any, node: any) => string)
  children: string
  disabled?: boolean
  isLeaf?: boolean
}

export interface TreeOptions {
  data: any[]
  nodeKey: string
  props: TreeProp
  emptyText?: string
  highlightCurrent?: boolean
  defaultExpandAll?: boolean
  expandOnClickNode?: boolean
  showCheckbox?: boolean
  iconClass?: string
  includeHalf?: boolean
}

export interface TransferOptions {
  titles?: string[]
  buttonTexts?: string[]
  data: any[]
  props?: { label: string; key: any }
  filterable?: boolean
  filterMethod?: (query: string, item: any) => boolean
  filterPlaceholder?: string
}
