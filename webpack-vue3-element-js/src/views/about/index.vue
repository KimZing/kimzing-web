<template>
  <div class="container-about">
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
<script setup>
  import packageInfo from '../../../package.json'

  const programInfo = {
    版本: packageInfo.version,
    授权: packageInfo.license,
    预览地址: packageInfo.online,
    GitLab: packageInfo.gitlab
  }
</script>

<style lang="scss">
  .container-about {
    .el-descriptions {
      margin: 10px 0px;
      background: #fff;
    }
    .el-descriptions__title {
      margin-top: 10px;
      margin-left: 10px;
      color: #424242d9;
    }
  }
</style>
