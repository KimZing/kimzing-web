<template>
  <el-button type="primary" @click="changeOptions">删除城市</el-button>
  <Echarts :map="map" map-name="china" :options="options"></Echarts>
</template>

<script setup>
  import Echarts from '@/components/echarts'
  import map from './map.json'
  import options from './options'

  // 减少一个数据源中的数据
  const changeOptions = () => {
    options.value.series[0].data.splice(1, 1)
  }

</script>

<style scoped>
</style>