<template>
  <el-radio-group :disabled="group.disabled">
    <el-radio
      v-for="radio in radios"
      :label="radio.value"
      :disabled="radio.disabled"
      :key="radio.label"
      >{{ radio.label }}</el-radio
    >
  </el-radio-group>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { RadioGroupOptions } from '../types/options'

  defineProps({
    group: {
      type: Object as PropType<RadioGroupOptions['group']>,
      default: () => ({
        disabled: false
      })
    },
    radios: {
      type: Array as PropType<RadioGroupOptions['radios']>,
      default: () => []
    }
  })
</script>
