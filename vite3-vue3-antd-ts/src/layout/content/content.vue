<template>
  <div id="content-container">
    <BackTop id="content-container" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import BackTop from '@/components/backtop/BackTop.vue'
</script>

<style scoped lang="less">
/*需要将所有父级 html body app layout的高度设置为100%，此处才会做到填充效果*/
#content-container {
  height: 100%;
  max-height: 100%;
  overflow: auto;
}
</style>
