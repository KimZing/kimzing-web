import type { SearchProp } from '@/components/base-table/types/types'

export const searchProp: SearchProp = {
  collapseTitle: '搜索书籍',
  labelPosition: 'right',
  labelWidth: 50,
  inline: true,
  schemas: [
    {
      prop: 'title',
      slot: 'search-title',
      label: '书名',
      type: 'Input',
      span: 6,
      options: {
        type: 'text',
        placeholder: '请输入书名',
        clearable: true
      }
    },
    {
      prop: 'authorName',
      label: '作者',
      type: 'Input',
      span: 6,
      options: {
        type: 'text',
        placeholder: '请输入作者名',
        clearable: true
      }
    },
    {
      prop: 'status',
      label: '状态',
      type: 'Select',
      defaultValue: '',
      span: 6,
      options: {
        clearable: true,
        placeholder: '书籍状态',
        options: [
          { label: '上架', value: true },
          { label: '下架', value: false }
        ]
      }
    },
    {
      prop: 'language',
      label: '语言',
      type: 'Select',
      defaultValue: '',
      span: 6,
      options: {
        clearable: true,
        placeholder: '选择语言',
        options: [
          { label: '中文', value: 'ZH' },
          { label: '英文', value: 'EN' }
        ]
      }
    },
    {
      prop: 'publishTime',
      label: '发布',
      type: 'DatePicker',
      span: 6,
      options: {
        type: 'daterange',
        editable: true,
        clearable: true,
        placeholder: '选择时间',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        valueFormat: 'YYYY-MM-DD'
      }
    }
  ],
  operation: {
    resetIcon: 'el-icon-refresh-right',
    submitText: '搜索',
    submitIcon: 'el-icon-search'
  }
}
