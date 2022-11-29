<template>
  <!-- 注意：虽然外部直接绑定了nodekey，但这里仍然要写，不然不生效 -->
  <el-tree ref="kimTree" :node-key="nodeKey" @check="handleCheck" @node-click="handleNodeClick">
  </el-tree>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import type { PropType } from 'vue'

  const kimTree = ref()

  const emit = defineEmits(['update:modelValue', 'nodeClick'])

  const props = defineProps({
    nodeKey: {
      type: String as PropType<string>,
      default: 'key'
    },
    includeHalf: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    modelValue: {
      type: Array as PropType<any[]>,
      default: () => []
    }
  })

  const handleCheck = () => {
    const checkedNodes = kimTree.value.getCheckedNodes(false, props.includeHalf)
    emit('update:modelValue', checkedNodes)
  }

  const handleNodeClick = (data: any) => {
    emit('nodeClick', data)
  }

  onMounted(() => {
    // 反显modelValue
    props.modelValue
      .map((m) => m[props.nodeKey])
      .forEach((key) => {
        const node = kimTree.value.getNode(key)
        if (node && node.isLeaf) {
          kimTree.value.setChecked(node, true)
        }
      })
    // 发送选中数据
    const checkedNodes = kimTree.value.getCheckedNodes(false, props.includeHalf)
    emit('update:modelValue', checkedNodes)
  })
</script>
