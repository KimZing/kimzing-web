<template>
  <!-- 如果元信息中要求在菜单展示才展示 -->
  <!-- 判断是否显示为菜单条目 -->
  <el-menu-item
    v-if="shouldShow(item)"
    :index="item.path"
    :key="item.path"
    :style="{ minWidth: sidebarWidth }"
  >
    <i :class="item.meta?.icon"></i>
    <template #title>
      <span>{{ t(item.meta?.title) }}</span>
    </template>
  </el-menu-item>
  <!-- 如果有子菜单并且父菜单设置为显示，则展示父菜单，并递归子菜单 -->
  <el-submenu v-else-if="item.children && item.meta?.menu" :index="item.path" :key="item.path">
    <template #title>
      <i :class="item.meta?.icon"></i>
      <span>{{ t(item.meta?.title) }}</span>
    </template>
    <menu-item v-for="next in item.children" :item="next" :key="next.path"></menu-item>
  </el-submenu>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import type { PropType } from 'vue'
  import type { RouteRecordRaw } from 'vue-router'
  import { useT } from '@/locals'
  import store from '@/store'

  const t = useT()

  // 传递的属性
  defineProps({
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    }
  })

  // 判断所有子路由是不是都是隐藏的，如果都是隐藏的则直接将父路由设置为菜单项
  const isAllChildHide = (children: RouteRecordRaw[]) => {
    return children.filter((c) => c.meta?.menu).length === 0
  }

  const shouldShow = (item: RouteRecordRaw): boolean => {
    // 如果本身为显示菜单、有子菜单并且子菜单都是隐藏状态，则显示
    if (item.meta?.menu && item.children && isAllChildHide(item.children)) {
      return true
    }
    // 如果没有子菜单且meta.menu为true，则显示
    if (!item.children && item.meta?.menu) {
      return true
    }
    return false
  }

  // 获取菜单的宽度
  const menuCollapse = computed(() => store.state.layout.menuCollapse)
  const sidebarWidth = computed({
    set: (value) => {},
    get: () => {
      if (menuCollapse.value) {
        return 'auto'
      }
      return `${store.state.setting.size.sidebarWidth}px`
    }
  })
</script>
