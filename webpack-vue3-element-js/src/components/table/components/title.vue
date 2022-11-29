<template>
  <div class="container-title">
    <div class="left">{{title}}</div>
    <div class="right">
      <el-button v-if="useCreate" type="success" plain :icon="CirclePlus" @click="$emit('create')"></el-button>
    </div>
  </div>
</template>

<script setup>
  import {CirclePlus} from '@element-plus/icons-vue'

  defineEmits(['create'])

  defineProps({
    title: {
      type: String,
      required: false,
      default: ''
    },
    useCreate: {
      type: Boolean,
      required: false,
      default: true
    }
  })
</script>

<style scoped lang="scss">
.container-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    color: #999;
  }
}
</style>