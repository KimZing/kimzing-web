<template>
  <SubMenu :key="route.path">
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
        <sub-menus :key="item.path" :route="item" />
      </template>
    </template>
  </SubMenu>
</template>
<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { SubMenu } from 'ant-design-vue'

defineProps<{
  route: RouteRecordRaw
}>()
</script>

<style scoped></style>
