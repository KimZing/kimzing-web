<template>
  <div class="container-about full">
    <PageWrapper
      title="关于"
      content="    kim-vue3-admin是一个基于Vue3.0、Vite、ElementPlus、TypeScript的后台解决方案，目标是提供一定的封装来方便项目的快速开发，原则上不会限制任何代码商用，但需声明来源"
    ></PageWrapper>
    <el-descriptions :border="true" title="项目信息">
      <el-descriptions-item v-for="[key, value] of Object.entries(programInfo)" :key="key">
        <template #label> {{ key }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions :border="true" title="生产依赖">
      <el-descriptions-item
        v-for="[key, value] of Object.entries(packageInfo.dependencies)"
        :key="key"
      >
        <template #label> {{ key }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions :border="true" title="开发依赖">
      <el-descriptions-item
        v-for="[key, value] of Object.entries(packageInfo.devDependencies)"
        :key="key"
      >
        <template #label> {{ key }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions :border="true" title="命令脚本" :column="1">
      <el-descriptions-item v-for="[key, value] of Object.entries(packageInfo.scripts)" :key="key">
        <template #label> {{ key }} </template>
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script setup lang="ts">
  import packageInfo from '../../../package.json'
  import PageWrapper from '@/components/page-wrapper/index.vue'

  const programInfo = {
    版本: packageInfo.version,
    授权: packageInfo.license,
    预览地址: packageInfo.online,
    Github: packageInfo.github,
    Gitee: packageInfo.gitee
  }
</script>

<style lang="scss">
  .container-about {
    box-sizing: border-box;
    padding: 10px;
    .el-descriptions {
      margin: 10px 0px;
      background: #fff;
    }
    // 添加边框，我这里直接在组件上写border不生效
    .el-descriptions .is-bordered td,
    .el-descriptions .is-bordered th {
      border: 1px solid #f0f0f0;
    }
    .el-descriptions__title {
      margin-top: 10px;
      margin-left: 10px;
      color: #424242d9;
    }
  }
</style>
