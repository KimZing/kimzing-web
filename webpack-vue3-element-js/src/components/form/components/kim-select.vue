<template>
  <el-select class="container-select">
    <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :key="item.value"
    >
      <span v-if="showValue" style="float: left">{{ item.label }}</span>
      <span v-if="showValue" style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>
<script setup>
  defineProps({
    options: {type: Array, required: true}, // select选项, 包含label value disabled 属性
    showValue: {type: Boolean, required: false, default: false} // 是否在select选择中展示value
  // clearable: Boolean, // 可清除
  // disabled: Boolean, // 可禁用
  // placeholder: String // 占位字符
  })
</script>
<style scoped lang="scss">
.container-select {
  width: 100%;
}
</style>
