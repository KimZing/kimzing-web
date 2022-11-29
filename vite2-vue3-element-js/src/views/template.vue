<template>
  <div class="container-template flex-center-full"> </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useTypeStore } from '@/store'

  const store = useTypeStore()
  const router = useRouter()

  // 传递的属性
  defineProps({
    name: {
      type: String,
      default: () => ''
    }
  })

  // 发射的事件
  const emit = defineEmits(['init'])
  emit('init')
</script>

<style lang="scss" scoped>
  .container-template {
  }
</style>
