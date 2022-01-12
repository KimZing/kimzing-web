<template>
  <el-scrollbar height="100%">
    <el-menu
      mode="vertical"
      :collapse="collapsed"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :default-active="menuActiveIndex"
      router
    >
      <slot></slot>
      <template v-for="item in menus">
        <MenuItem
          v-if="item && item.meta && item.meta.menu"
          :item="item"
          :key="item.path"
        ></MenuItem>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import type { RouteLocationMatched } from 'vue-router'
  import { useTypeStore } from '@/store'
  import { getUserRoutes } from '@/utils/router'
  import { deepCopy } from '@/utils/copy'
  import { allRoutes } from '@/router'
  import MenuItem from './components/menu-item.vue'

  const store = useTypeStore()
  const route = useRoute()

  // 属性设置
  const collapsed = computed(() => store.state.layout.menuCollapse)
  const backgroundColor = computed(() => store.state.setting.color.menuBackground)
  const textColor = computed(() => store.state.setting.color.menuText)
  const activeTextColor = computed(() => store.state.setting.color.menuActiveText)

  // 菜单列表
  const menus = computed(() => {
    const { permissions } = store.state.user
    return getUserRoutes(deepCopy(allRoutes), permissions)
  })

  // 获取当前激活的菜单path， 如果该菜单隐藏，则向上取path
  const getActivePath = (matched: RouteLocationMatched[], index: number): string => {
    if (index < 0) {
      return ''
    }
    if (matched[index].meta.menu === false) {
      return getActivePath(matched, index - 1)
    }
    return matched[index].path
  }

  // 激活的菜单，根据路由自动更新
  const menuActiveIndex = ref()
  // 刷新页面时，激活菜单
  onMounted(() => {
    menuActiveIndex.value = getActivePath(route.matched, route.matched.length - 1)
  })
  // 路由变化时，更新菜单
  watch(
    () => route.matched,
    (matched) => {
      menuActiveIndex.value = getActivePath(matched, matched.length - 1)
    }
  )
</script>
<style lang="scss">
  .el-menu {
    height: 100%;
  }
  .el-scrollbar__view {
    height: 100%;
  }
</style>
