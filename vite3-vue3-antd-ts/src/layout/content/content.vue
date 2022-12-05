<template>
  <div id="content-container">
    <BackTop id="content-container" />
    <div class="content-box">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackTop from '@/components/backtop/BackTop.vue'
</script>

<style scoped lang="less">
/*需要将所有父级 html body app layout的高度设置为100%，此处才会做到填充效果*/
#content-container {
  height: 100%;
  padding: 10px 0 0 10px;
  .content-box {
    background-color: #fff;
    padding: 10px;
    height: 100%;
    max-height: 100%;
    overflow: auto;
  }
}
</style>
