<template>
  <span>{{ value }}</span>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'

  defineProps({
    value: {
      type: String as PropType<string>
    }
  })
</script>
