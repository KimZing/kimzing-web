<template>
  <div class="container-iframe flex-center-full">
    <iframe :src="src" class="iframe-wrapper" ref="frameRef"></iframe>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    src: String
  })
</script>
<style lang="scss" scoped>
  .iframe-wrapper {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #fff;
  }
</style>
