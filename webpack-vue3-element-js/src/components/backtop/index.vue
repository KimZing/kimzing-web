<template>
  <div class="container-backtop">
    <el-backtop :target="target"/>
  </div>
</template>
<script setup>
  defineProps({
    target: {
      type: String,
      default: () => ''
    }
  })
</script>
