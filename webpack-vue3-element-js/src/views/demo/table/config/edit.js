export const getEditConfig = () => {
    return {
        hidden: false,
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
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                options: {
                    type: 'text',
                    placeholder: '',
                    disabled: true
                }
            },
            {
                prop: 'username',
                label: '姓名',
                hidden: false,
                type: 'Input',
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
                ],
                options: {
                    type: 'text',
                    placeholder: '请输入姓名',
                    clearable: true,
                    showPassword: false,
                    disabled: false
                }
            },
            {
                prop: 'gender',
                label: '性别',
                hidden: false,
                type: 'Select',
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请选择性别', trigger: 'blur'}
                ],
                options: {
                    options: [{label: '男', value: 'MAN'}, {label: '女', value: 'WOMAN'}],
                    clearable: true,
                    disabled: false,
                    placeholder: '性别'
                }
            },
            {
                prop: 'age',
                label: '年龄',
                hidden: false,
                type: 'InputNumber',
                default: 18,
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请输入年龄', trigger: 'blur'}
                ],
                options: {
                    min: 1,
                    max: 150,
                    step: 5,
                    stepStrictly: true,
                    disabled: false,
                    controls: true,
                    controlsPosition: 'right',
                    placeholder: '年龄'
                }
            },
            {
                prop: 'score',
                label: '信用分',
                hidden: false,
                type: 'InputNumber',
                default: 80,
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请输入信用分', trigger: 'blur'}
                ],
                options: {
                    min: 1,
                    max: 100,
                    step: 5,
                    stepStrictly: true,
                    disabled: false,
                    controls: true,
                    controlsPosition: 'right',
                    placeholder: '信用'
                }
            },
            {
                prop: 'height',
                label: '身高',
                hidden: false,
                type: 'Input',
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请输入身高', trigger: 'blur'}
                ],
                options: {
                    type: 'Input',
                    placeholder: '请输入身高',
                    clearable: true,
                    disabled: false,
                    suffix: 'cm'
                }
            },
            {
                prop: 'weight',
                label: '体重',
                hidden: false,
                type: 'Input',
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请输入体重', trigger: 'blur'}
                ],
                options: {
                    type: 'Input',
                    placeholder: '请输入体重',
                    clearable: true,
                    disabled: false,
                    suffix: 'kg'
                }
            },
            {
                prop: 'birthday',
                label: '出生日期',
                hidden: false,
                type: 'DatePicker',
                default: '',
                gutter: 0,
                span: 18,
                offset: 0,
                rules: [
                    {required: true, message: '请选择日期', trigger: 'change'}
                ],
                options: {
                    type: 'date',
                    disabled: false,
                    editable: true,
                    clearable: true,
                    placeholder: '选择日期',
                    valueFormat: 'YYYY-MM-DD'
                }
            },
            {
                prop: 'address',
                label: '地址',
                hidden: false,
                type: 'Input',
                default: '',
                gutter: 0,
                span: 24,
                offset: 0,
                rules: [
                    {required: true, message: '请填写地址', trigger: 'blur'}
                ],
                options: {
                    type: 'textarea',
                    maxlength: 200,
                    showWordLimit: true,
                    placeholder: '请输入家庭住址',
                    clearable: true,
                    rows: 3,
                    showPassword: false,
                    disabled: false
                }
            },
            {
                prop: 'introduce',
                label: '简介',
                hidden: false,
                type: 'Input',
                default: '',
                gutter: 0,
                span: 24,
                offset: 0,
                options: {
                    type: 'textarea',
                    maxlength: 200,
                    showWordLimit: true,
                    placeholder: '请填写简介',
                    clearable: true,
                    rows: 5,
                    showPassword: false,
                    disabled: false
                }
            }
        ]
    }
}