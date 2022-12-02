<template>
  <div class="logo">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@/store'
import { computed } from 'vue'

let store = useStore(key)

const title = computed(() => store.state.title)
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
