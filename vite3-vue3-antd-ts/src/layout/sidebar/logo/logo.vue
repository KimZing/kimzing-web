<template>
  <div class="logo-container">
    <img alt="logo" class="image" :src="Logo" />
    <div v-if="!collapse" class="title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'
import Logo from '@/assets/images/logo/logo.png'

defineProps<{ collapse: boolean }>()

let store = useStore()
const title = computed(() => store.state.title)
</script>

<style scoped lang="less">
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 5px;
  .image {
    width: 40px;
    height: 40px;
  }
  .title {
    color: #fff;
    font-weight: 700;
  }
}
</style>
