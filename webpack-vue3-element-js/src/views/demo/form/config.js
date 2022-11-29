// 获取所有区域，用于Select框
import {getRegionList} from '@/apis/base'
import {reactive} from 'vue'

// 区域列表
const regions = reactive([])
// 动态获取区域列表
getRegionList().then((res) => {
    // 不可以直接赋值，会检测不到变化。也不能用ref，由于.value机制会导致子组件无法读取值
    regions.push(...res)
})

export const config = {
    disabled: false,
    inline: false,
    labelPosition:  'right',
    labelWidth:  100,
    schemas: [
        {
            prop: 'id',
            label: 'ID',
            hidden: true,
            type: 'Input',
            default: 1,
            gutter: 0,
            span: 8,
            offset: 0,
            rules: [],
            options: {
                type: 'text',
                placeholder: '请输入ID',
                clearable: true,
                showPassword: false,
                disabled: true
            }
        },
        {
            prop: 'name',
            label: '活动名称',
            hidden: false,
            type: 'Input',
            default: '夏令营',
            gutter: 0,
            span: 4,
            offset: 0,
            rules: [
                {required: true, message: '请输入活动名称', trigger: 'blur'},
                {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
            ],
            options: {
                type: 'text',
                placeholder: '请输入活动名称',
                clearable: true,
                showPassword: false,
                disabled: false
            }
        },
        {
            prop: 'number',
            label: '活动人数',
            hidden: false,
            type: 'InputNumber',
            default: 1,
            gutter: 0,
            span: 4,
            offset: 0,
            rules: [
                {required: true, message: '请输入活动人数', trigger: 'blur'}
            ],
            options: {
                min: 1,
                max: 100,
                step: 5,
                stepStrictly: true,
                disabled: false,
                controls: true,
                controlsPosition: 'right',
                placeholder: '人数'
            }
        },
        {
            prop: 'region',
            label: '活动区域',
            hidden: false,
            type: 'Select',
            default: '',
            gutter: 0,
            span: 4,
            offset: 0,
            rules: [
                {required: true, message: '请输入活动区域', trigger: 'blur'}
            ],
            options: {
                options: regions,
                clearable: true,
                disabled: false,
                placeholder: '活动区域'
            }
        },
        {
            prop: 'date',
            label: '活动时间',
            hidden: false,
            type: 'DatePicker',
            default: '2022-03-16 15:12:14',
            gutter: 0,
            span: 5,
            offset: 0,
            rules: [
                {required: true, message: '请选择日期时间', trigger: 'change'}
            ],
            options: {
                type: 'datetime',
                disabled: false,
                editable: true,
                clearable: true,
                placeholder: '选择时间',
                valueFormat: 'YYYY-MM-DD HH:mm:ss'
            }
        },
        {
            prop: 'delivery',
            label: '即时配送',
            hidden: false,
            type: 'Switch',
            default: false,
            gutter: 0,
            span: 8,
            offset: 0,
            rules: [],
            options: {
                disabled: false,
                activeValue: true,
                inactiveValue: false
            }
        },
        {
            prop: 'type',
            label: '活动性质',
            hidden: false,
            type: 'Checkbox',
            default: ['online', 'offline_ground'],
            gutter: 0,
            span: 16,
            offset: 0,
            rules: [{type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}],
            options: {
                min: 2,
                max: 3,
                checkboxes: [
                    {
                        label: '美食/餐厅线上活动',
                        value: 'online',
                        disabled: false,
                        checked: false
                    },
                    {
                        label: '地推活动',
                        value: 'offline_ground',
                        disabled: false,
                        checked: false
                    },
                    {
                        label: '线下主题活动',
                        value: 'offline_topic',
                        disabled: false,
                        checked: false
                    },
                    {
                        label: '单纯品牌曝光',
                        value: 'single',
                        disabled: true,
                        checked: true
                    }
                ]
            }
        },
        {
            prop: 'resource',
            label: '特殊资源',
            hidden: false,
            type: 'Radio',
            default: 'offline',
            gutter: 0,
            span: 16,
            offset: 0,
            rules: [{required: true, message: '请选择特殊资源', trigger: 'change'}],
            options: {
                disabled: false,
                radios: [
                    {label: '线上品牌赞助', value: 'online', disabled: false},
                    {label: '线下场地免费', value: 'offline', disabled: false}
                ]
            }
        },
        {
            prop: 'desc',
            label: '活动形式',
            hidden: false,
            type: 'Input',
            default: '团队',
            gutter: 0,
            span: 16,
            offset: 0,
            rules: [
                {required: true, message: '请填写活动形式', trigger: 'blur'}
            ],
            options: {
                type: 'textarea',
                maxlength: 200,
                showWordLimit: true,
                placeholder: '请输入活动形式内容',
                clearable: true,
                rows: 5,
                showPassword: false,
                disabled: false
            }
        }
    ]
}