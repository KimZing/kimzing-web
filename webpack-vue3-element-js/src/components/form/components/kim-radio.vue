<template>
  <el-radio-group>
    <el-radio
      v-for="radio in radios"
      :label="radio.value"
      :disabled="radio.disabled"
      :key="radio.label"
      >{{ radio.label }}</el-radio
    >
  </el-radio-group>
</template>
<script setup>
  defineProps({
    radios: Array // 选项 {label: 标签，value: 值， disabled: 禁用}
    // disabled: Boolean, // 是否禁用
  })
</script>
