<template>
  <div class="chart-card">
    <div class="card-header">
      <div>{{ title }}</div>
    </div>
    <div
      ref="chartRef"
      :style="{
        width: '100%',
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }"
    >
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import type { PropType } from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps({
    title: {
      type: String as PropType<string>
    },
    height: {
      type: String as PropType<string>
    },
    option: {
      type: Object as PropType<any>
    }
  })

  const chartRef = ref()
  onMounted(() => {
    const myChart = echarts.init(chartRef.value)
    myChart.setOption(props.option as any)
  })
</script>

<style lang="scss" scoped>
  .chart-card {
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 10px;
    box-sizing: border-box;
    width: 100%;
    .card-header {
      box-sizing: border-box;
      padding: 8px;
      font-size: 18px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
</style>
