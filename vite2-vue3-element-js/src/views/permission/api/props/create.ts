import type { BaseFormProps } from '@/components/base-form/types/props'
import { valids } from '@/utils/valid'

export const createProp: BaseFormProps = {
  labelPosition: 'right',
  labelWidth: 80,
  schemas: [
    {
      prop: 'method',
      defaultValue: 'get',
      label: '方法',
      type: 'Select',
      span: 15,
      options: {
        options: [
          { label: 'GET', value: 'get' },
          { label: 'POST', value: 'post' },
          { label: 'PUT', value: 'put' },
          { label: 'DELETE', value: 'delete' }
        ],
        placeholder: '请求方法'
      },
      rules: [valids.required()]
    },
    {
      prop: 'path',
      label: '路径',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入API路径',
        clearable: true
      },
      rules: [valids.required(), valids.path()]
    },
    {
      prop: 'remark',
      label: '接口说明',
      type: 'Input',
      span: 20,
      options: {
        type: 'textarea',
        placeholder: '请输入接口的功能说明',
        clearable: true
      },
      rules: [valids.required()]
    }
  ],
  operation: {
    resetIcon: 'el-icon-refresh-right',
    submitText: '保存',
    submitIcon: 'el-icon-finished'
  }
}
