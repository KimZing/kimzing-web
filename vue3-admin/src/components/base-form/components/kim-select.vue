<template>
  <el-select :remote-method="remoteMethod" style="width: 100%">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
      :key="item.value"
    ></el-option>
  </el-select>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { SelectOption, SelectOptions } from '../types/options'

  const props = defineProps({
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => []
    },
    remoteMethod: {
      type: Function as PropType<SelectOptions['remoteMethod']>
    }
  })

  const remoteMethod = (query: string) => {
    props.remoteMethod!(query, props.options)
  }
</script>
