import type { BaseFormProps } from '@/components/base-form/types/props'
import { valids } from '@/utils/valid'
import { getPermissionTree } from '../helper'

export const createProp: BaseFormProps = {
  labelPosition: 'right',
  labelWidth: 80,
  schemas: [
    {
      prop: 'key',
      label: '标识',
      type: 'Input',
      span: 18,
      options: {
        type: 'text',
        formatter: (value: string) => value.toUpperCase(),
        placeholder: '请输入标识',
        clearable: true
      },
      rules: [valids.required(), valids.upperWithUnderline()]
    },
    {
      prop: 'name',
      label: '角色名',
      type: 'Input',
      span: 18,
      options: {
        type: 'text',
        placeholder: '请输入角色名',
        clearable: true
      },
      rules: [valids.required(), valids.chinese()]
    },
    {
      prop: 'status',
      label: '状态',
      type: 'Select',
      defaultValue: true,
      span: 18,
      options: {
        options: [
          { label: '启用', value: true },
          { label: '禁用', value: false }
        ],
        placeholder: '选择角色状态'
      },
      rules: [valids.required()]
    },
    {
      prop: 'permissions',
      label: '权限',
      type: 'Tree',
      options: {
        nodeKey: 'key',
        showCheckbox: true,
        includeHalf: true,
        props: { label: 'title', children: 'children' },
        data: getPermissionTree()
      }
    },
    {
      prop: 'remark',
      label: '角色说明',
      type: 'Input',
      span: 18,
      options: {
        type: 'textarea',
        rows: 3,
        placeholder: '请输入说明信息',
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
