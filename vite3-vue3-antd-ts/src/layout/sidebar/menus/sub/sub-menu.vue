<template>
  <a-sub-menu :key="route.path">
    <template #icon>
      <component :is="$icons[route.meta.icon]" />
    </template>
    <template #title>
      {{ route.meta.title }}
    </template>
    <template v-for="item in route.children" :key="item.path">
      <template v-if="item.meta.menu && !item.children">
        <a-menu-item :key="item.path">
          <template #icon>
            <component :is="$icons[item.meta.icon]" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.path" :route="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

defineProps<{
  route: RouteRecordRaw
}>()
</script>

<style scoped></style>
