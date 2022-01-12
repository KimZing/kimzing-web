<template>
  <div class="container-home full">
    <InfoCards :growCards="state.growCards"></InfoCards>
    <ChartCards v-bind="visitConfig"></ChartCards>
    <div class="home-content">
      <ChartCards v-bind="radarConfig"></ChartCards>
      <ChartCards v-bind="sourceConfig"></ChartCards>
      <ChartCards v-bind="productConfig"></ChartCards>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { getAnalysisData } from '@/apis/home'
  import InfoCards from './components/info-cards.vue'
  import type { Analysis } from '@/model/home'
  import ChartCards from './components/chart-cards.vue'
  import { productConfig, radarConfig, sourceConfig, visitConfig } from './config'

  const state = ref<Analysis>({})

  onMounted(() => {
    getAnalysisData().then((data) => {
      state.value = data
    })
  })
</script>
<style lang="scss" scoped>
  .container-home {
    display: flex;
    flex-direction: column;
    .home-content {
      display: flex;
      * {
        margin-right: 10px;
      }
      .chart-card:last-child {
        margin-right: 0;
      }
    }
  }
</style>
