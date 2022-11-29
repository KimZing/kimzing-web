<template>
  <!-- 注意：虽然外部直接绑定了props，但这里仍然要写，不然不生效 -->
  <el-transfer :props="props">
    <template #default="{ option }">
      <slot name="default" :option="option">
        <span
          ><el-tag>{{ option[props?.key] }}</el-tag
          >-<span>{{ option[props?.label] }}</span></span
        >
      </slot>
    </template>
    <template #right-footer>
      <slot name="right-footer"></slot>
    </template>
  </el-transfer>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'
  import type { TransferOptions } from '../types/options'

  defineProps({
    props: {
      type: Object as PropType<TransferOptions['props']>,
      default: () => ({
        label: 'label',
        key: 'key'
      })
    }
  })
</script>
