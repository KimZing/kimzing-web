<template>
  <div class="container-backtop">
    <el-backtop :target="target" style="z-index: 9999999">UP</el-backtop>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    target: {
      type: String,
      default: () => ''
    }
  })
</script>
