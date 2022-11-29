<template>
  <el-checkbox-group>
    <el-checkbox
      v-for="checkbox in checkboxes"
      :name="checkbox.name"
      :checked="checkbox.checked"
      :label="checkbox.value"
      :disabled="checkbox.disabled"
      :key="checkbox.label"
      >{{ checkbox.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script setup>

  defineProps({
    checkboxes: Array // [{label: 标签, value: 值，disabled：禁用, checked: 默认是否选择}]

    // min: Number, // 最少选择个数
    // max: Number, // 最多选择个数
  })
</script>
