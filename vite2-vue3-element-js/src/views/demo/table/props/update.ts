import type { BaseFormProps } from '@/components/base-form/types/props'
import { valids } from '@/utils/valid'

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
        type: 'text'
      }
    },
    {
      prop: 'title',
      label: '书名',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入书名',
        clearable: true
      },
      rules: [valids.required('书名')]
    },
    {
      prop: 'language',
      label: '语言',
      type: 'Select',
      defaultValue: '',
      span: 15,
      options: {
        clearable: true,
        placeholder: '选择语言',
        options: [
          { label: '中文', value: 'ZH' },
          { label: '英文', value: 'EN' }
        ]
      },
      rules: [valids.required('语言')]
    },
    {
      prop: 'price',
      label: '价格',
      type: 'InputNumber',
      defaultValue: 1,
      span: 15,
      options: {
        min: 1,
        precision: 2,
        controlsPosition: 'right',
        placeholder: '价格'
      },
      rules: [valids.required(), valids.size(1, 5)]
    },
    {
      prop: 'score',
      label: '评分',
      type: 'Rate',
      defaultValue: 0,
      span: 15,
      options: {
        max: 5,
        allowHalf: true
      },
      rules: [valids.required('评分'), valids.size(0, 5)]
    },
    {
      prop: 'sold',
      label: '销量',
      type: 'InputNumber',
      defaultValue: 0,
      span: 15,
      options: {
        min: 0,
        controlsPosition: 'right',
        placeholder: '销量'
      },
      rules: [valids.required('销量'), valids.size(0, 999999)]
    },
    {
      prop: 'publishTime',
      label: '发布',
      type: 'DatePicker',
      span: 15,
      options: {
        type: 'datetime',
        editable: true,
        clearable: true,
        placeholder: '选择时间',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        valueFormat: 'YYYY-MM-DD'
      },
      rules: [valids.required()]
    },
    {
      prop: 'authorName',
      label: '作者',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入作者名',
        clearable: true
      },
      rules: [valids.required(), valids.chinese()]
    },
    {
      prop: 'authorPhone',
      label: '手机号',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入手机号',
        clearable: true
      },
      rules: [valids.required(), valids.phone()]
    },
    {
      prop: 'authorEmail',
      label: '邮箱',
      type: 'Input',
      span: 15,
      options: {
        type: 'text',
        placeholder: '请输入邮箱',
        clearable: true
      },
      rules: [valids.required(), valids.type('email')]
    },
    {
      prop: 'authorAddress',
      label: '地址',
      type: 'Input',
      span: 24,
      options: {
        type: 'textarea',
        placeholder: '请输入地址',
        clearable: true
      }
    }
  ],
  operation: {
    resetIcon: 'el-icon-refresh-right',
    submitText: '更新',
    submitIcon: 'el-icon-finished'
  }
}
