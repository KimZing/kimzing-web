import type { BaseFormProps } from '@/components/base-form/types/props'
import store from '@/store'
import { valids } from '@/utils/valid'

export const updatePasswordFormProp: BaseFormProps = {
  labelPosition: 'right',
  labelWidth: 80,
  schemas: [
    {
      prop: 'id',
      label: '用户ID',
      type: 'Input',
      defaultValue: store.state.user.user.id,
      hidden: true,
      options: {
        type: 'password',
        disabled: true
      }
    },
    {
      prop: 'password',
      label: '密码',
      span: 18,
      type: 'Input',
      options: {
        type: 'password',
        placeholder: '请输入新密码'
      },
      rules: [valids.required('密码'), valids.length(6, 18), valids.type('string')]
    }
  ],
  operation: {
    showReset: false,
    submitText: '修改密码',
    submitIcon: 'el-icon-finished'
  }
}
