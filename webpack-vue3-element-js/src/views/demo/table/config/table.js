export const getTableConfig = (data) => {
    return {
        schemas: [
            {
                prop: 'introduce',
                label: '介绍',
                type: 'expand'
            },
            {
                prop: 'index',
                type: 'index',
                label: '序列',
                align: 'center',
                width: '60'
            },
            {
                prop: 'username',
                label: '姓名',
                align: 'center',
                width: '90'
            },
            {
                prop: 'age',
                label: '年龄',
                align: 'center',
                width: '90',
                formatter: (row, column, cellValue, index) => cellValue + '岁'
            },
            {
                prop: 'gender',
                slot: 'gender',
                align: 'center',
                label: '性别',
                width: '90'
            },
            {
                prop: 'score',
                label: '信用分',
                align: 'center',
                width: '90',
                formatter: (row, column, cellValue, index) => cellValue + '分'
            },
            {
                prop: 'height',
                label: '身高',
                align: 'center',
                width: '90',
                formatter: (row, column, cellValue, index) => cellValue + 'CM'
            },
            {
                prop: 'weight',
                label: '体重',
                align: 'center',
                width: '90',
                formatter: (row, column, cellValue, index) => cellValue + '公斤'
            },
            {
                prop: 'birthday',
                label: '生日',
                align: 'center'
            },
            {
                prop: 'address',
                label: '地址',
                width: '200'
            }
        ],
        data,
        operate: {
            hidden: false,
            edit: {hidden: false},
            remove: {hidden: false}
        }
    }
}