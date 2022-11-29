<template>
  <div class="container-user-info flex-center">
    <div>
      <el-avatar size="medium" style="background-color: cornflowerblue">{{
        user.realname.substring(0, 1)
      }}</el-avatar>
    </div>
    <div>
      {{ user.realname }}
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useTypeStore } from '@/store'

  const store = useTypeStore()

  // 获取用户信息
  const user = computed(() => store.state.user.user)
</script>
<style lang="scss" scoped>
  .container-user-info {
    font-size: 16px;
    font-weight: 400;
    :first-child {
      margin-right: 8px;
    }
  }
</style>
