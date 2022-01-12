<template>
  <div class="container-screenfull flex-center">
    <el-tooltip effect="dark" :content="t('layout.header.tip.fullscreen')" placement="bottom">
      <div>
        <i class="iconfont icon-fullscreen" v-show="!isFull" @click="changeScreen"></i>
        <i class="iconfont icon-fullscreen-exit" v-show="isFull" @click="changeScreen"></i>
      </div>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
  // 全屏组件
  import screenfull from 'screenfull'
  import { ref } from 'vue'
  import { useT } from '@/locals'
  import notice from '@/utils/notice'

  const t = useT()

  const isFull = ref(false)
  const changeScreen = () => {
    if (!screenfull.isEnabled) {
      notice('无法全屏', '您的浏览器暂不支持全屏操作')
    } else {
      const screenfullInstantce = screenfull as screenfull.Screenfull
      screenfullInstantce.toggle()
      isFull.value = !isFull.value
    }
  }
</script>
<style lang="scss" scoped>
  .container-screenfull {
    i {
      font-size: 20px;
    }
  }
</style>
