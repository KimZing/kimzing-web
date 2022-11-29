<template>
  <!--router 路由模式，使用index作为path-->
  <el-menu
      mode="vertical"
      :router="true"
      active-text-color="#409eff"
      background-color="#1f1f1f"
      :default-active="menuActiveIndex"
      text-color="#fff"
  >
    <slot></slot>
    <template v-for="(menu) in menus" :key="menu">
      <menu-item :menu="menu"></menu-item>
    </template>
  </el-menu>
</template>

<script setup>
  import menus from '@/router/data/menu'
  import MenuItem from '@/layout/aside/menu/components/menu-item'
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'

  const route = useRoute()
  // 默认激活的菜单
  let menuActiveIndex = ref()
  onMounted(() => {
    // 设置当前激活菜单，(解决刷新时菜单未激活的问题)
    menuActiveIndex.value = route.matched[route.matched.length -1].path
  })

  // 路由变化时，更新菜单,解决通过面包屑导航时，菜单未激活的问题
  watch(
    () => route.matched,
    (matched) => {
      menuActiveIndex.value = matched[matched.length - 1].path
    }
  )
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
}
</style>