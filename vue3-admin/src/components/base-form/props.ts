import type { PropType } from 'vue'
import { Field, BaseFormProps } from './types/props'

export const baseFormProps = {
  disabled: { type: Boolean as PropType<boolean>, default: false },
  hideRequiredAsterisk: { type: Boolean as PropType<boolean>, default: false },
  labelPosition: { type: String as PropType<string>, default: 'right' },
  labelWidth: { type: Number as PropType<number>, default: 100 },
  inline: { type: Boolean as PropType<boolean>, default: false },
  schemas: { type: Object as PropType<Field[]>, default: [] },
  rules: {},
  operation: {
    type: Object as PropType<BaseFormProps['operation']>
  }
}
