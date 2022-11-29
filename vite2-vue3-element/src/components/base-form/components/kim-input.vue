<template>
  <el-input @input="handleInput">
    <template v-if="prefixText" #prepend>{{ prefixText }}</template>
    <template v-if="suffixText" #append>{{ suffixText }}</template>
  </el-input>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import { InputOptions } from '../types/options'

  const props = defineProps({
    formatter: Function as PropType<InputOptions['formatter']>,
    prefixText: String as PropType<string>,
    suffixText: String as PropType<string>
  })

  const emit = defineEmits(['update:modelValue'])

  const handleInput = (value: string) => {
    if (props.formatter) {
      emit('update:modelValue', props.formatter(value))
    } else {
      emit('update:modelValue', value)
    }
  }
</script>
