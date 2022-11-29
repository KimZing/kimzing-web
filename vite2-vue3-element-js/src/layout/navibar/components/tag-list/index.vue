<template>
  <div class="container-tag-list full">
    <el-tag
      v-for="item in tag.tags.value"
      size="small"
      :type="item.active ? 'success' : ''"
      :effect="item.active ? 'dark' : 'light'"
      :closable="item.closable"
      :key="item.name"
      @click="tag.clickTag(item)"
      @close="tag.closeTag(item)"
      >{{ item.title.indexOf('.') === -1 ? item.title : t(item.title) }}
    </el-tag>
  </div>
</template>
<script setup lang="ts">
  import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
  import { onMounted, watch } from 'vue'
  import { useT } from '@/locals'
  import { useTag } from './useTag'
  import { Tag } from '@/store/layout/state'

  const route = useRoute()
  const tag = useTag()
  const t = useT()

  const addTagByRoute = (currentRoute: RouteLocationNormalizedLoaded) => {
    if (!currentRoute.meta.tag) {
      return
    }
    const newTag: Tag = {
      title: currentRoute.meta.title as string,
      name: currentRoute.name,
      params: currentRoute.params,
      query: currentRoute.query,
      active: true,
      closable: !currentRoute.meta.tagFix
    }
    tag.addTag(newTag)
  }

  onMounted(() => {
    addTagByRoute(route)
  })

  watch(route, () => {
    addTagByRoute(route)
  })
</script>

<style lang="scss" scoped>
  .container-tag-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > * {
      margin: 4px 2px;
    }
  }
</style>
