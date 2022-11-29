<template>
  <div class="container-breadcrumb flex-center-full">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in breadcrumbList" :to="{ path: item.path }" :key="item.path">
        {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup>
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'
  import {ArrowRight} from '@element-plus/icons-vue'

  const route = useRoute()

  // 防止刷新页面后，面包屑丢失的问题
  const breadcrumbList = ref([])

  const setBreadcrumb = (matched) => {
    const totalBreadcrumbs = []
    for (let i = 0; i < matched.length; i += 1) {
      // 去除对跟路径的路由添加  /
      if(matched[i].path === '/') continue
      // 添加路径到面包屑中
      totalBreadcrumbs.push({path: matched[i].path, title: matched[i].meta.title})
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
