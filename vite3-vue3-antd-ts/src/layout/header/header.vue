<template>
  <div class="header-container shadow">
    <div />
    <UserInfo />
  </div>
</template>

<script setup lang="ts">
import UserInfo from '@/layout/header/user-info/user-info.vue'
</script>

<style scoped lang="less">
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: #fff;
}
</style>
