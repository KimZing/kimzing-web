<template>
  <div class="flex-center-full">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-wrapper">
      <el-breadcrumb-item v-for="item in breadcrumbList" :to="{ path: item.path }" :key="item.path">
        {{ t(item.title) }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import type { RouteLocationMatched } from 'vue-router'
  import { useT } from '@/locals'

  interface Breadcrumb {
    path: string
    title: string
  }

  const route = useRoute()
  const t = useT()

  // 防止刷新页面后，面包屑丢失的问题
  const breadcrumbList = ref<Breadcrumb[]>([])

  const setBreadcrumb = (matched: RouteLocationMatched[]) => {
    const totalBreadcrumbs: Breadcrumb[] = []
    // 解决两个home首页的问题  from:/  to:/home都会展示到面包屑上,同时也解决各种重定向的重复添加问题
    for (let i = 0; i < matched.length; i += 1) {
      if (matched[i].meta.bread !== false) {
        totalBreadcrumbs.push({ path: matched[i].path, title: matched[i].meta.title as string })
      }
    }
    breadcrumbList.value = totalBreadcrumbs
  }

  onMounted(() => {
    setBreadcrumb(route.matched)
  })

  // 当路由参数更改时获取路由信息
  watch(
    () => route.matched,
    (matched) => {
      setBreadcrumb(matched)
    }
  )
</script>
<style lang="scss" scoped>
  .breadcrumb-wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
