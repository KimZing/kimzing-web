<template>
  <div class="container-pie full">
    <Echarts :options="options1" width="50%" height="50%"></Echarts>
    <Echarts :options="options2" width="50%" height="50%"></Echarts>
    <Echarts :options="options3" width="50%" height="50%"></Echarts>
    <Echarts :options="options4" width="50%" height="50%"></Echarts>
  </div>
</template>

<script setup>
  import Echarts from '@/components/echarts'
  import {options1, options2, options3, options4} from '@/views/demo/chart/pie/options'
</script>

<style scoped lang="scss">
.container-pie {
  display: flex;
  flex-wrap: wrap;
}
</style>