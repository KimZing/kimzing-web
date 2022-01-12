<template>
  <el-container>
    <el-aside v-show="visible.sidebar">
      <MenuList>
        <Logo v-if="visible.logo"></Logo>
      </MenuList>
    </el-aside>
    <el-container>
      <el-header v-show="visible.header">
        <Header />
      </el-header>
      <el-header v-show="visible.navibar">
        <Navbar />
      </el-header>
      <el-main v-if="visible.main">
        <Main />
      </el-main>
    </el-container>
    <Setting></Setting>
  </el-container>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useTypeStore } from '@/store'
  import Navbar from './navibar/index.vue'
  import Header from './header/index.vue'
  import Main from './main/index.vue'
  import Setting from './setting/index.vue'
  import Logo from './sidebar/logo/index.vue'
  import MenuList from './sidebar/menu/index.vue'

  const store = useTypeStore()

  const visible = computed(() => store.state.setting.visible)
</script>
<style lang="scss" scoped>
  .el-container {
    height: 100vh;
    .el-aside {
      width: auto;
    }
    .el-container {
      .el-header {
        padding: 0;
        font-size: 20px;
      }
      .el-header:nth-of-type(1) {
        height: 50px;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
        display: flex;
      }
      .el-header:nth-of-type(2) {
        height: auto;
        border-bottom: 0.5px solid #eee;
        display: flex;
      }
      .el-main {
        padding: 10px;
        background-color: #f0f2f5;
      }
    }
  }
</style>
