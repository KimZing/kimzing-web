import param from '@/views/demo/chart/map/param'
import {ref} from 'vue'

// 注意此处必须使用ref方法进行包裹，以此来提供响应式更新
const options = ref({
    visualMap: [
        {
            min: 0,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: false,
            orient: 'horizontal',
            inRange: {
                color: ['#e0ffff', '#006edd'],
                symbolSize: [30, 100]
            }
        }
    ],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    series: [
        {
            name: 'iphone4',
            type: 'map',
            map: 'china',
            label: {
                show: true,
                color: 'rgb(249, 249, 249)',
                fontSize: 10
            },
            itemStyle: {
                areaColor: '#2f82ce',
                borderColor: '#0DAAC1'
            },
            data: param
        }
    ]
})

export default options