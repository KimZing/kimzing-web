<template>
  <div class="container-home">
    <div class="card-list">
      <Card v-for="(item) in state.data" :item="item" :key="item.title"></Card>
    </div>
  </div>
</template>

<script setup>
  import {reactive} from 'vue'
  import Card from '@/components/card'

  const state = reactive({
    data: [
      {title: '成交额', unit: '个', value: 12113, total: 456, icon: 'Position'},
      {title: '成交额', unit: '个', value: 123, total: 456, icon:'Position'},
      {title: '成交额', unit: '件', value: 223, total: 456, icon:'Position'},
      {title: '成交额', unit: '件', value: 223, total: 456, icon:'Position'},
      {title: '成交额', unit: '件', value: 223, total: 456, icon:'Position'}
    ]
  })
</script>

<style scoped lang="scss">
.container-home {
  .card-list {
    display: flex;
    flex-wrap: nowrap;
    > * {
      margin-right: 10px
    }
    :last-of-type {
      margin-right: 0px
    }
  }
}
</style>