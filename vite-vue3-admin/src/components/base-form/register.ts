import KimInput from './components/kim-input.vue'
import KimSelect from './components/kim-select.vue'
import KimDatePicker from './components/kim-date-picker.vue'
import KimSwitch from './components/kim-switch.vue'
import KimCheckboxGroup from './components/kim-checkbox-group.vue'
import KimRadioGroup from './components/kim-radio-group.vue'
import KimSpan from './components/kim-span.vue'
import RichEditor from '@/components/rich-editor/index.vue'
import KimInputNumber from './components/kim-input-number.vue'
import KimRate from './components/kim-rate.vue'
import KimTree from './components/kim-tree.vue'

export const getRegisterComponet = (name: String) => {
  if (name === 'Input') {
    return KimInput
  }
  if (name === 'Select') {
    return KimSelect
  }
  if (name === 'DatePicker') {
    return KimDatePicker
  }
  if (name === 'Switch') {
    return KimSwitch
  }
  if (name === 'CheckboxGroup') {
    return KimCheckboxGroup
  }
  if (name === 'RadioGroup') {
    return KimRadioGroup
  }
  if (name === 'Span') {
    return KimSpan
  }
  if (name === 'RichEditor') {
    return RichEditor
  }
  if (name === 'InputNumber') {
    return KimInputNumber
  }
  if (name === 'Rate') {
    return KimRate
  }
  if (name === 'Tree') {
    return KimTree
  }
  return null
}
