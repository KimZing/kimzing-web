import type { TableProp } from '@/components/base-table/types/types'

export const tableProp: TableProp = {
  showTableTitle: true,
  title: '角色列表',
  columns: [
    {
      title: 'ID',
      prop: 'id',
      hidden: true
    },
    {
      title: '角色名',
      prop: 'name',
      fixed: 'left'
    },
    {
      title: '标识',
      prop: 'key'
    },
    {
      title: '状态',
      prop: 'status',
      formatter: (row: any, column: any, cellValue?: any, index?: number) =>
        cellValue ? '启用' : '禁用'
    },
    {
      title: '创建时间',
      prop: 'createTime'
    },
    {
      title: '修改时间',
      prop: 'modifyTime'
    }
  ],
  operation: {
    slots: ['role-status'],
    updateText: '',
    deleteText: ''
  }
}
