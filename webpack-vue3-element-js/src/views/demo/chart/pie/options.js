import {ref} from 'vue'

// 使用时将data内容进行重新赋值即可
export const options1 = ref({
    legend: {
        bottom: 0,
        data: ['访问', '购买']
    },
    tooltip: {},
    radar: {
        radius: '60%',
        splitNumber: 8,
        indicator: [
            {
                text: '电脑',
                max: 100
            },
            {
                text: '充电器',
                max: 100
            },
            {
                text: '耳机',
                max: 100
            },
            {
                text: '手机',
                max: 100
            },
            {
                text: 'Ipad',
                max: 100
            },
            {
                text: '耳机',
                max: 100
            }
        ]
    },
    series: [
        {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
                shadowBlur: 0,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
            },
            data: [
                {
                    value: [90, 50, 86, 40, 50, 20],
                    name: '访问',
                    itemStyle: {
                        color: '#b6a2de'
                    }
                },
                {
                    value: [70, 75, 70, 76, 20, 85],
                    name: '购买',
                    itemStyle: {
                        color: '#5ab1ef'
                    }
                }
            ]
        }
    ]
})

export const options2 = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: '1%',
        left: 'center'
    },
    series: [
        {
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'}
            ],
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: 0.8
        }
    ]
})

export const options3 = ref({
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            data: [
                {value: 500, name: '电子产品'},
                {value: 310, name: '服装'},
                {value: 274, name: '化妆品'},
                {value: 400, name: '家居'}
            ].sort((a, b) => {
                return a.value - b.value
            }),
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: 0.7
        }
    ]
})

export const options4 = ref({
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '各渠道投诉占比',
            type: 'pie',
            // 半径
            radius: '80%',
            // 中心点
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '客服电话'},
                {value: 310, name: '奥迪官网'},
                {value: 234, name: '媒体曝光'},
                {value: 135, name: '质检总局'},
                {value: 105, name: '其他'}
            ],
            labelLine: {show: true},
            label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                color: '#B1B9D3'
            }
        }
    ]
})
