<template>
  <div class="container-space-item">
    <div class="left">{{ title }}</div>
    <div class="right"><slot></slot></div>
  </div>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue'

  defineProps({
    title: String as PropType<string>
  })
</script>

<style lang="scss" scoped>
  .container-space-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
</style>
