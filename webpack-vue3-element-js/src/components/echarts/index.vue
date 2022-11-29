<template>
  <div :id="echartId" :style="{width: props.width, height: props.height}"></div>
</template>

<script setup>
  import * as echarts from 'echarts'
  import {onMounted, watch} from 'vue'
  import {randomString} from '@/utils/random'

  const props = defineProps({
    // 地图资源，非必填
    map: {
      type: Object,
      required: false
    },
    // 地图名称
    mapName: {
      type: String,
      required: false
    },
    // 图表配置
    options: {
      type: Object,
      required: true
    },
    // 高度
    height: {
      type: String,
      required: false,
      default: '100%'
    },
    // 宽度
    width: {
      type: String,
      required: false,
      default: '100%'
    }
  })

  // 随机Id，防止一个页面放置多个图表导致ID冲突
  const echartId = randomString(6)

  // 设置地图，如果存在
  if (props.map) {
    echarts.registerMap(props.mapName, props.map)
  }
  // 图表实例
  let chart
  // 加载时初始化，并注册自适应调整
  onMounted(() => {
    chart = echarts.init(document.getElementById(echartId))
    chart.setOption(props.options)
    // 注册页面调整事件，使其可以自适应大小
    window.onresize =  () => {
      chart.resize()
    }
  })
  // 监听options的变化，并刷新页面
  watch(props.options, (oldOptions, newOptions) => {
    chart.setOption(newOptions)
    chart.resize()
  })
</script>

<style scoped>
</style>