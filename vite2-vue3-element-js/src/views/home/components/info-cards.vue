<template>
  <div class="container-info-cards">
    <el-card
      class="card"
      :body-style="{ padding: '0px' }"
      v-for="(item, index) in growCards"
      :key="index"
    >
      <div class="card-header">
        <div class="title">{{ item.title }}</div>
        <div class="unit"
          ><el-tag :type="item.unitType">{{ item.unit }}</el-tag></div
        >
      </div>
      <div class="card-content">
        <div class="title">{{ item.value }}</div>
        <div class="image"><img :src="item.icon" style="width: 40px; height: 40px" /></div>
      </div>
      <div class="card-footer">
        <div class="title">总{{ item.title }}</div>
        <div class="total">{{ item.total }}</div>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue'
  import type { GrowCard } from '@/model/home'

  defineProps({
    growCards: {
      type: Array as PropType<GrowCard[]>,
      default: () => []
    }
  })
</script>

<style lang="scss" scoped>
  .container-info-cards {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    .card {
      box-sizing: border-box;
      margin-left: 10px;
      width: 100%;
      .card-header {
        box-sizing: border-box;
        padding: 5px 8px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
      }
      .card-content {
        padding: 28px;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 24px;
        }
        .image {
          width: 40px;
          height: 40px;
        }
      }
      .card-footer {
        padding: 8px 16px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
      }
    }
    :first-of-type {
      margin-left: 0;
    }
  }
</style>
