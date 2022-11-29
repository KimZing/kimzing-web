<template>
  <div class="container-collapse-card">
    <el-collapse v-if="collapse" v-model="activeItem">
      <el-collapse-item class="search-collapse" :title="collapseTitle" name="1">
        <slot name="default"></slot>
      </el-collapse-item>
    </el-collapse>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  // 展开激活条目
  const activeItem = ref(['1'])

  defineProps({
    // 是否可以折叠
    collapse: {
      type: Boolean,
      default: () => false
    },
    collapseTitle: {
      type: String,
      default: () => ''
    }
  })
</script>
<style lang="scss">
  .container-collapse-card {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
</style>
