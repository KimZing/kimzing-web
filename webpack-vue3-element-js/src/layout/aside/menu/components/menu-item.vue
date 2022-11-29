<template>
  <!-- 单层菜单 -->
  <el-menu-item v-if="!menu.children" :index="menu.path">
    <el-icon v-if="menu.meta.icon">
      <component :is="menu.meta.icon"/>
    </el-icon>
    <span>{{menu.meta.title}}</span>
  </el-menu-item>
  <!-- 子菜单 -->
  <el-sub-menu v-else :index="menu.path">
    <template #title>
      <el-icon v-if="menu.meta.icon">
        <component :is="menu.meta.icon"/>
      </el-icon>
      <span>{{menu.meta.title}}</span>
    </template>
    <menu-item v-for="(child) in menu.children" :menu="child" :key="child.path"></menu-item>
  </el-sub-menu>
</template>

<script setup>
  defineProps({
    menu: {
      type: Object,
      required: true
    }
  })
</script>