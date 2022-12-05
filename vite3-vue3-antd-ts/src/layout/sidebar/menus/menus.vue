<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <template v-for="route in routes" :key="route.path">
      <template v-if="route.meta.menu && !route.children">
        <a-menu-item :key="route.path">
          <template #icon>
            <component :is="$icons[route.meta.icon]" />
          </template>
          {{ route.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :key="route.path" :route="route" />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routes } from '@/router'
import SubMenu from '@/layout/sidebar/menus/sub/sub-menu.vue'

const selectedKeys = ref<string[]>(['/'])
</script>

<style scoped></style>
