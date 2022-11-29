import type { TableProp } from '@/components/base-table/types/types'
import { features } from '@/router/consts'
import { positions } from '../consts'

export const tableProp: TableProp = {
  showTableTitle: true,
  title: '用户列表',
  columns: [
    {
      title: 'ID',
      prop: 'id',
      hidden: true
    },
    {
      title: '用户名',
      prop: 'username'
    },
    {
      title: '姓名',
      prop: 'realname'
    },
    {
      title: '工号',
      prop: 'workNumber'
    },
    {
      title: '状态',
      width: 150,
      prop: 'lock',
      slot: 'user-status'
    },
    {
      title: '角色',
      width: 150,
      prop: 'roleName'
    },
    {
      title: '手机号',
      prop: 'phone'
    },
    {
      title: '邮箱',
      prop: 'email'
    },
    {
      title: '职位',
      prop: 'position',
      formatter: (row: any, column: any, cellValue?: any, index?: number) => {
        const position = positions.filter((p) => p.value === cellValue)
        return position && position.length > 0 ? position[0].label : '无'
      }
    },
    {
      title: '注册时间',
      prop: 'createTime'
    },
    {
      title: '修改时间',
      prop: 'modifyTime'
    }
  ],
  operation: {
    slots: ['user-role-operation'],
    width: 220,
    updateText: '',
    deleteText: '',
    createPermission: features.user.create,
    deletePermission: features.user.delete,
    updatePermission: features.user.update
  }
}
