<template>
  <PageIframe :src="url"></PageIframe>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue'
  import PageIframe from '@/components/page-iframe/index.vue'

  defineProps({
    url: String as PropType<string>
  })
</script>
