<template>
  <div class="container-echart-map full" ref="map"></div>
</template>
<script setup lang="ts">
  import { onMounted } from '@vue/runtime-core'
  import * as echarts from 'echarts'
  import { ref } from 'vue'
  import { mapData } from './data'
  import china from './china.json'

  const map = ref()

  onMounted(() => {
    const mapChart = echarts.init(map.value)
    echarts.registerMap('china', china as any)
    const options = {
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
          data: mapData
        }
      ]
    }
    mapChart.setOption(options)
  })
</script>

<style lang="scss" scoped>
  .container-echart-map {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #eee;
  }
</style>
