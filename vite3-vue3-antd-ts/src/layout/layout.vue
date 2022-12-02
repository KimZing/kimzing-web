<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-box">
        <Header />
      </a-layout-header>
      <a-layout-content class="full-height">
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/layout/sidebar/sidebar.vue'
import Header from '@/layout/header/header.vue'
import Content from '@/layout/content/content.vue'

const collapsed = ref<boolean>(false)
</script>

<style scoped>
.layout-container {
  height: 100%;
  min-height: 100vh;
}
.header-box {
  padding: 0;
}
</style>
