<template>
  <div class="container-header">
    <div class="left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right">
      <div>
        <el-tooltip content="全屏">
          <Fullscreen class="fullscreen"/>
        </el-tooltip>
      </div>
      <div><el-button type="danger" plain @click="logout">登出</el-button></div>
    </div>
  </div>
</template>

<script setup>
  import Breadcrumb from '@/components/breadcrumb'
  import Fullscreen from '@/components/fullscreen'
  import storage from '@/utils/storage'
  import {useRouter} from 'vue-router'

  const router = useRouter()
  const logout = () => {
    storage.clear()
    router.push({path: '/login'})
  }
</script>

<style scoped lang="scss">
  .container-header {
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      border-left: 1px solid #cecece;
      .fullscreen {
        font-size: 22px;
      }
      > * {
        padding: 0 10px;
      }
    }
  }
</style>