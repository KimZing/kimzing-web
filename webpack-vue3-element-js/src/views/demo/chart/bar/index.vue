<template>
  <Echarts :options="options"></Echarts>
</template>

<script setup>
  import Echarts from '@/components/echarts'
  import options from './options'
  import {onUnmounted} from 'vue'

  // 定时更改数据
  const interval = setInterval(() => {
    options.value.series[0].data[0] = options.value.series[0].data[0] + 50
    options.value.series[0].data[4] = options.value.series[0].data[4] + 100

  }, 2000)

  onUnmounted(() => {
    window.clearInterval(interval)
  })
</script>

<style scoped>

</style>