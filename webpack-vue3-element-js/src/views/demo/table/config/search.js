export const getSearchConfig = () => {
    return {
        hidden: false,
        disabled: false,
        inline: true,
        labelPosition:  'right',
        labelWidth:  80,
        submit: {text: '搜索', icon: 'search'},
        schemas: [
            {
                prop: 'username',
                label: '姓名',
                slot: 'searchName',
                hidden: false,
                gutter: 0,
                span: 4,
                offset: 0
            },
            {
                prop: 'gender',
                label: '性别',
                hidden: false,
                type: 'Select',
                default: '',
                gutter: 0,
                span: 4,
                offset: 0,
                options: {
                    options: [{label: '男', value: 'MAN'}, {label: '女', value: 'WOMAN'}],
                    clearable: true,
                    disabled: false,
                    placeholder: '性别'
                }
            },
            {
                prop: 'createTime',
                label: '注册时间',
                hidden: false,
                type: 'DatePicker',
                default: '',
                gutter: 0,
                span: 5,
                offset: 0,
                options: {
                    type: 'datetime',
                    disabled: false,
                    editable: true,
                    clearable: true,
                    placeholder: '选择时间',
                    valueFormat: 'YYYY-MM-DD HH:mm:ss'
                }
            }
        ]
    }
}