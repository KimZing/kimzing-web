<template>
  <BaseTable v-bind="apiTableConfig"> </BaseTable>
</template>
<script setup lang="ts">
  import BaseTable from '@/components/base-table/index.vue'
  import apiTableConfig from './config'
</script>
