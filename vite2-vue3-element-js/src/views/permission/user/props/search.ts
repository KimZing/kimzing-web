import type { SearchProp } from '@/components/base-table/types/types'
import { positions } from '../consts'

export const searchProp: SearchProp = {
  collapseTitle: '搜索角色',
  collapse: true,
  labelWidth: 80,
  inline: true,
  schemas: [
    {
      prop: 'realname',
      label: '姓名',
      type: 'Input',
      options: {
        type: 'text',
        placeholder: '真实姓名',
        clearable: true
      }
    },
    {
      prop: 'lock',
      label: '状态',
      type: 'Select',
      defaultValue: null,
      options: {
        options: [
          { label: '正常', value: '0' },
          { label: '冻结', value: '1' }
        ],
        placeholder: '用户状态',
        clearable: true
      }
    },
    {
      prop: 'position',
      label: '职位',
      defaultValue: null,
      type: 'Select',
      options: {
        options: positions,
        placeholder: '选择职位',
        clearable: true
      }
    }
  ],
  operation: {
    submitText: '搜索'
  }
}
