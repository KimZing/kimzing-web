import type { BaseFormProps } from '@/components/base-form/types/props'
import { valids } from '@/utils/valid'
import { positions } from '../consts'
import { getAllRoleSelect } from '../helper'

export const updateProp: BaseFormProps = {
  labelPosition: 'right',
  labelWidth: 80,
  schemas: [
    {
      prop: 'id',
      label: 'ID',
      type: 'Input',
      hidden: true,
      options: {
        type: 'text',
        disabled: true
      }
    },
    {
      prop: 'username',
      label: '用户名',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入用户名',
        clearable: true
      },
      rules: [valids.required('用户名'), valids.length(3, 18)]
    },
    {
      prop: 'realname',
      label: '姓名',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入姓名',
        clearable: true
      },
      rules: [valids.required(), valids.chinese()]
    },
    {
      prop: 'position',
      label: '职位',
      defaultValue: null,
      type: 'Select',
      span: 15,
      options: {
        options: positions,
        placeholder: '请选择职位',
        clearable: true
      },
      rules: [valids.required('职位')]
    },
    {
      prop: 'roleId',
      label: '角色',
      type: 'Select',
      span: 15,
      defaultValue: null,
      options: {
        options: getAllRoleSelect(),
        placeholder: '角色',
        clearable: true
      }
    },
    {
      prop: 'workNumber',
      label: '工号',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        rows: 3,
        placeholder: '请输入工号',
        clearable: true
      },
      rules: [valids.required('工号'), valids.type('number')]
    },
    {
      prop: 'phone',
      label: '手机号',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入手机号',
        clearable: true
      },
      rules: [valids.required('手机号'), valids.phone()]
    },
    {
      prop: 'email',
      label: '邮箱',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        rows: 3,
        placeholder: '请输入邮箱',
        clearable: true
      },
      rules: [valids.required('邮箱'), valids.type('email')]
    }
  ],
  operation: {
    resetIcon: 'el-icon-refresh-right',
    submitText: '更新',
    submitIcon: 'el-icon-finished'
  }
}
