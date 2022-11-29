<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import Aside from './aside'
  import Header from './header'
  import Main from './main'

</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
  .el-aside {
    width: 200px;
  }
  .el-container {
    .el-header {
      padding: 0;
    }
    .el-main {
      padding: 10px;
      background-color: #f0f0f0;
    }
  }
}
</style>