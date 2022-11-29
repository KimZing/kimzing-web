<template>
  <div class="container-page-wrapper">
    <div class="wrapper-title"
      ><slot>{{ title }}</slot></div
    >
    <div class="wrapper-content"
      ><slot name="content">
        {{ content }}
      </slot></div
    >
  </div>
</template>
<script setup lang="ts">
  import type { PropType } from '@vue/runtime-core'

  defineProps({
    title: {
      type: String as PropType<string>,
      default: ''
    },
    content: {
      type: String as PropType<string>,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .container-page-wrapper {
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    .wrapper-title {
      color: #000000d9;
      font-weight: 600;
      font-size: 20px;
    }
    .wrapper-content {
      padding-top: 12px;
    }
  }
</style>
