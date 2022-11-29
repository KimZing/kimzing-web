<template>
  <div class="container-setting-title flex-center-full">
    <span class="line"></span>
    <div class="title">{{ name }}</div>
    <span class="line"></span>
  </div>
</template>
<script setup lang="ts">
  // 传递的属性
  defineProps({
    name: {
      type: String,
      default: () => ''
    }
  })
</script>

<style lang="scss" scoped>
  .container-setting-title {
    .title {
      text-align: center;
      min-width: 120px;
      margin: 10px 15px;
      font-weight: 600;
      color: rgb(117, 117, 117);
    }
    .line {
      display: inline-block;
      width: 100%;
      border-top: 1px solid #eeeeee;
    }
  }
</style>
