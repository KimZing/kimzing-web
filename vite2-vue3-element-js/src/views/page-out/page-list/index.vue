<template>
  <div>
    <div style="margin-bottom: 10px">演示在页面内部打开外部页面</div>
    <div>
      <el-button
        type="primary"
        @click="clickPage('https://v3.cn.vuejs.org/guide/introduction.html', 'VueJS')"
        >VUE</el-button
      >
      <el-button
        type="success"
        @click="clickPage('https://next.router.vuejs.org/zh/introduction.html', 'Vue路由')"
        >Vue路由</el-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useTag } from '@/layout/navibar/components/tag-list/useTag'

  const tagHelper = useTag()
  const router = useRouter()
  const clickPage = (url: string, title: string) => {
    router.push({ name: 'page', params: { url, pathMatch: title } })
    tagHelper.addTag({
      title,
      name: 'page',
      params: { url },
      query: {},
      active: true,
      closable: true
    })
  }
</script>

<style lang="scss" scoped></style>
