import { reactive } from 'vue'
import { getAllArea } from '@/apis/area'
import { BaseFormProps } from '@/components/base-form/types/props'
import { SelectOption } from '@/components/base-form/types/options'
import store from '@/store'

// 演示：动态获取全量的地区列表
const getAreaOptions = () => {
  const options = reactive<SelectOption[]>([])
  getAllArea().then((allArea) => {
    options.push(...allArea.map((a) => ({ label: a.name, value: a.value })))
  })
  return options
}

export const activityFormProps: BaseFormProps = {
  disabled: false,
  hideRequiredAsterisk: false,
  labelPosition: 'right',
  labelWidth: 150,
  inline: false,
  schemas: [
    {
      prop: 'id',
      label: '活动ID',
      hidden: true,
      type: 'Input',
      defaultValue: 1,
      span: 6,
      options: {
        type: 'text',
        placeholder: '请输入活动ID',
        clearable: true
      }
    },
    {
      prop: 'name',
      slot: 'activity-name',
      label: '活动名称',
      type: 'Input',
      span: 6,
      options: {},
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    {
      prop: 'persons',
      label: '活动人数',
      type: 'InputNumber',
      defaultValue: 1,
      span: 6,
      options: {
        min: 1,
        max: 10,
        controlsPosition: 'right',
        placeholder: '活动人数'
      },
      rules: [
        { required: true, message: '活动人数', trigger: 'blur' },
        { type: 'number', min: 1, max: 10, message: '活动人数有误', trigger: 'blur' }
      ]
    },
    {
      prop: 'level',
      label: '活动等级',
      type: 'Rate',
      defaultValue: 2.5,
      span: 6,
      options: {
        max: 5,
        allowHalf: true
      }
    },
    {
      prop: 'departs',
      label: '参与部门',
      type: 'Tree',
      defaultValue: [
        {
          name: '人力资源',
          key: 'renli',
          children: [
            {
              name: '招聘部门',
              key: 'zhaopin'
            },
            {
              name: '薪资部门',
              key: '薪资'
            }
          ]
        },
        {
          name: '招聘部门',
          key: 'zhaopin'
        }
      ],
      span: 6,
      options: {
        nodeKey: 'key',
        includeHalf: true,
        props: { label: (data: any) => data.name, children: 'children' },
        showCheckbox: true,
        data: [
          {
            name: '人力资源',
            key: 'renli',
            children: [
              { name: '招聘部门', key: 'zhaopin' },
              { name: '薪资部门', key: '薪资' }
            ]
          },
          {
            name: '技术部',
            key: 'tech',
            children: [
              { name: '大数据', key: 'bigdata' },
              {
                name: 'AI计算',
                key: 'ai',
                children: [
                  { name: 'AI平台', key: 'aiplatform' },
                  { name: 'AI语音', key: 'aivoice' }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      prop: 'region',
      label: '活动区域',
      type: 'Select',
      defaultValue: 'nanjing',
      span: 6,
      options: {
        clearable: true,
        placeholder: '选择区域',
        options: getAreaOptions()
      },
      rules: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
    },
    {
      prop: 'region2',
      label: '远程获取Select',
      type: 'Select',
      defaultValue: null,
      span: 6,
      options: {
        clearable: true,
        placeholder: '远程获取',
        filterable: true,
        remote: true,
        options: [],
        remoteMethod: (word: string, options: SelectOption[]) => {
          options.length = 0
          const tempOptions = [
            { label: '南京', value: 'nanjing' },
            { label: '北京', value: 'beijing' },
            { label: '上海', value: 'shanghai' }
          ]
          if (!word || word === '') {
            options.push(...tempOptions)
            return
          }
          options.push(...tempOptions.filter((o) => o.label.indexOf(word) > -1))
        }
      },
      rules: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
    },
    {
      prop: 'date',
      label: '活动时间',
      type: 'DatePicker',
      defaultValue: '2021-07-28 00:12:00',
      span: 6,
      options: {
        type: 'datetime',
        editable: true,
        clearable: true,
        placeholder: '选择时间',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      },
      rules: [{ type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }]
    },
    {
      prop: 'delivery',
      label: '即时配送',
      type: 'Switch',
      defaultValue: true,
      span: 6,
      options: {
        activeValue: true,
        inactiveValue: false
      }
    },
    {
      prop: 'type',
      label: '活动性质',
      type: 'CheckboxGroup',
      defaultValue: ['online', 'offline_ground'],
      span: 16,
      options: {
        group: {
          disabled: false,
          min: 0,
          max: 5
        },
        checkboxes: [
          {
            name: 'type',
            label: '美食/餐厅线上活动',
            value: 'online',
            disabled: false,
            checked: false
          },
          {
            name: 'type',
            label: '地推活动',
            value: 'offline_ground',
            disabled: false,
            checked: false
          },
          {
            name: 'type',
            label: '线下主题活动',
            value: 'offline_topic',
            disabled: false,
            checked: false
          },
          {
            name: 'type',
            label: '单纯品牌曝光',
            value: 'single',
            disabled: true,
            checked: true
          }
        ]
      },
      rules: [
        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
      ]
    },
    {
      prop: 'resource',
      label: '特殊资源',
      type: 'RadioGroup',
      defaultValue: 'offline',
      span: 12,
      options: {
        group: {
          disabled: false
        },
        radios: [
          {
            label: '线上品牌赞助',
            value: 'online',
            disabled: false
          },
          { label: '线下场地免费', value: 'offline', disabled: true }
        ]
      },
      rules: [{ required: true, message: '请选择活动资源', trigger: 'change' }]
    },
    {
      prop: 'desc',
      label: '活动形式',
      type: 'Input',
      defaultValue: '团队',
      span: 12,
      options: {
        type: 'textarea',
        maxlength: 200,
        showWordLimit: true,
        rows: 4,
        placeholder: '请输入活动形式内容',
        clearable: true
      },
      rules: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
    },
    {
      prop: 'doc',
      label: '活动文档',
      type: 'RichEditor',
      defaultValue: '活动文档的详细内容',
      span: 20,
      options: {
        language: 'zh',
        uploadUrl: 'http://localhost:8080/api/upload',
        headers: { Authorization: store.state.user.token }
      },
      rules: [{ required: true, message: '请填写活动文档', trigger: 'blur' }]
    }
  ],
  operation: {
    submitIcon: 'el-icon-finished'
  }
}
