<template>
  <div class="container-navibar">
    <TagList></TagList>
    <IconList class="right"></IconList>
  </div>
</template>
<script setup lang="ts">
  import TagList from '@/layout/navibar/components/tag-list/index.vue'
  import { useTypeStore } from '@/store'
  import IconList from './components/icon-list/index.vue'

  const store = useTypeStore()
</script>
<style lang="scss" scoped>
  .container-navibar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
