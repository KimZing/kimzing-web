<template>
  <el-input-number class="container-input-number"></el-input-number>
</template>
<script setup>
  defineProps({
    // stepStrictly: Boolean, // 是否只能输入 step 的倍数
    // controlsPosition: String // 控制按钮位置
    // min: Number, // 设置计数器允许的最小值
    // max: Number, // 设置计数器允许的最大值
    // step: Number, // 计数器步长
    // disabled: Boolean, // 是否禁用
    // controls: Boolean, // 是否使用控制按钮
    // placeholder: String // 输入框默认 placeholder

  })
</script>
<style scoped lang="scss">
  .container-input-number {
    width: 100%;
  }
</style>
