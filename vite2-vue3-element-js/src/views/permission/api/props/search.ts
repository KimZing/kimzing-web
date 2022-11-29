import type { SearchProp } from '@/components/base-table/types/types'

export const searchProp: SearchProp = {
  collapseTitle: '搜索API',
  collapse: true,
  labelWidth: 80,
  inline: true,
  schemas: [
    {
      prop: 'path',
      label: '路径',
      type: 'Input',
      options: {
        type: 'text',
        placeholder: 'API路径',
        clearable: true
      }
    },
    {
      prop: 'method',
      label: '方法',
      defaultValue: null,
      type: 'Select',
      options: {
        options: [
          { label: 'GET', value: 'get' },
          { label: 'POST', value: 'post' },
          { label: 'PUT', value: 'put' },
          { label: 'DELETE', value: 'delete' }
        ],
        placeholder: '请求方法'
      }
    },
    {
      prop: 'remark',
      label: '备注',
      type: 'Input',
      options: {
        type: 'text',
        placeholder: '备注',
        clearable: true
      }
    }
  ],
  operation: {
    submitText: '搜索'
  }
}
