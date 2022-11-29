import { TableProp } from '@/components/base-table/types/types'
import { features } from '@/router/consts'
import { getExpendFormProp } from './expend'

export const tableProp: TableProp = {
  showTableTitle: true,
  title: '书籍列表',
  page: {
    pageSizes: [20, 50, 100, 150]
  },
  columns: [
    {
      title: '作者',
      type: 'expand',
      prop: 'expand',
      fixed: 'left',
      expendForm: getExpendFormProp
    },
    {
      title: '序号',
      type: 'index',
      prop: 'index',
      fixed: 'left'
    },
    {
      title: '书名',
      prop: 'title'
    },
    {
      title: '作者名',
      prop: 'authorName'
    },
    {
      title: '邮箱',
      prop: 'authorEmail'
    },
    {
      title: '售价',
      prop: 'price',
      formatter: (row: any, column: any, cellValue?: any, index?: number) => `${cellValue} 元`
    },
    {
      title: '评分',
      prop: 'score',
      slot: 'table-score'
    },
    {
      title: '销量',
      prop: 'sold',
      formatter: (row: any, column: any, cellValue?: any, index?: number) => `${cellValue} 本`
    },
    {
      title: '状态',
      prop: 'status',
      formatter: (row: any, column: any, cellValue?: any, index?: number) =>
        cellValue ? '上架' : '下架'
    },
    {
      title: '发布时间',
      prop: 'publishTime'
    }
  ],
  operation: {
    slots: ['action-status'],
    createText: '',
    updateText: '',
    deleteText: '',
    createPermission: features.table.create,
    updatePermission: features.table.update,
    deletePermission: features.table.delete
  }
}
