import type { TableProp } from '@/components/base-table/types/types'

export const tableProp: TableProp = {
  showTableTitle: true,
  title: 'API列表',
  columns: [
    {
      title: 'ID',
      prop: 'id',
      hidden: true
    },
    {
      title: '路径',
      prop: 'path'
    },
    {
      title: '方法',
      prop: 'method',
      formatter: (row: any, column: any, cellValue?: any, index?: number) => {
        switch (cellValue) {
          case 'get':
            return 'GET'
          case 'post':
            return 'POST'
          case 'put':
            return 'PUT'
          case 'delete':
            return 'DELETE'
          default:
            return '未知'
        }
      }
    },
    {
      title: '备注',
      prop: 'remark'
    }
  ],
  operation: {
    updateText: ''
  }
}
