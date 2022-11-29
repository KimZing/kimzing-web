<template>
  <el-checkbox-group :disabled="group.disabled" :min="group.min" :max="group.max">
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
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { CheckboxGroupOptions } from '../types/options'

  defineProps({
    group: {
      type: Object as PropType<CheckboxGroupOptions['group']>,
      default: () => ({
        disabled: false,
        min: undefined,
        max: undefined
      })
    },
    checkboxes: {
      type: Array as PropType<CheckboxGroupOptions['checkboxes']>,
      default: () => []
    }
  })
</script>
