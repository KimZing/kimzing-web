<template>
  <div class="container-screenfull">
    <el-icon @click="changeScreen"><full-screen /></el-icon>
  </div>
</template>
<script setup>
  import screenfull from 'screenfull'
  import {ElNotification} from 'element-plus'

  const changeScreen = () => {
    if (!screenfull.isEnabled) {
      ElNotification.error({
        title: '无法全屏',
        message: '您的浏览器暂不支持全屏操作'
      })
    } else {
      screenfull.toggle()
    }
  }
</script>
<style lang="scss" scoped>
</style>
