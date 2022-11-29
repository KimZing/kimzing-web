<template>
  <div class="container-card">
      <div class="card-header">
        <div class="title">{{ item.title }}</div>
        <div class="unit">
          <el-tag>{{ item.unit }}</el-tag>
        </div>
      </div>
      <div class="card-content">
        <div class="title">{{ item.value }}</div>
        <div class="image">
          <el-icon>
            <component :is="item.icon"/>
          </el-icon>
        </div>
      </div>
      <div class="card-footer">
        <div class="title">总{{ item.title }}</div>
        <div class="total">{{ item.total }}</div>
      </div>
  </div>
</template>
<script setup>
  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .container-card {
    width: 345px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow:0 2px 12px 0 rgba(0, 0, 0, .1);
    .card-header {
      height: 35px;
      padding: 4px 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eeeeee;
    }
    .card-content {
      height: 96px;
      padding: 0 20px;
      font-size: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-footer {
      height: 35px;
      padding: 4px 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
