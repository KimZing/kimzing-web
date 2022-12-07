<template>
  <Layout class="layout-container">
    <LayoutSider v-model:collapsed="collapse" collapsible width="230px">
      <Logo :collapse="collapse" />
      <Menus />
    </LayoutSider>
    <Layout>
      <LayoutHeader class="header-box">
        <Header />
      </LayoutHeader>
      <LayoutContent class="full-height">
        <Content />
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from 'ant-design-vue'
import { ref } from 'vue'
import Header from '@/layout/header/header.vue'
import Content from '@/layout/content/content.vue'
import Logo from '@/layout/sidebar/logo/logo.vue'
import Menus from '@/layout/sidebar/menus/menus.vue'

const collapse = ref<boolean>(false)
</script>

<style scoped>
.layout-container {
  height: 100%;
  min-height: 100vh;
}
.header-box {
  padding: 0;
  height: 64px;
}
</style>
