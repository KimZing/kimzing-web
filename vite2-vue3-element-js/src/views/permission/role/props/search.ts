import type { SearchProp } from '@/components/base-table/types/types'

export const searchProp: SearchProp = {
  collapseTitle: '搜索角色',
  collapse: true,
  labelWidth: 80,
  inline: true,
  schemas: [
    {
      prop: 'name',
      label: '角色名',
      type: 'Input',
      options: {
        placeholder: '角色名',
        type: 'text',
        clearable: true
      }
    },
    {
      prop: 'key',
      label: '角色标识',
      type: 'Input',
      options: {
        placeholder: '角色标识',
        type: 'text',
        clearable: true
      }
    },
    {
      prop: 'status',
      label: '状态',
      type: 'Select',
      defaultValue: '',
      options: {
        placeholder: '状态',
        options: [
          { label: '启用', value: true },
          { label: '禁用', value: false }
        ]
      }
    }
  ],
  operation: {
    submitText: '搜索'
  }
}
