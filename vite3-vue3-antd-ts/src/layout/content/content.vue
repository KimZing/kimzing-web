<template>
  <div id="content-container">
    <BackTop id="content-container" />
    <div v-for="i in 100" :key="i" class="testDiv"> Con </div>
  </div>
</template>

<script setup lang="ts">
import BackTop from '@/components/backtop/BackTop.vue'
</script>

<style scoped lang="less">
@height: 100%;
/*需要将所有父级 html body app layout的高度设置为100%，此处才会做到填充效果*/
#content-container {
  height: @height;
  max-height: @height;
  overflow: auto;
  .testDiv {
    background-color: aqua;
  }
}
</style>
