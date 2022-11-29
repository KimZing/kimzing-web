<template>
  <el-table class="container-content" :data="data" stripe border>
    <template v-for="schema in schemas" :key="schema.prop">
      <!--   插槽列   -->
      <el-table-column v-if="schema.slot" v-bind="schema" show-overflow-tooltip>
        <template #default="scope">
          <slot :name="schema.slot" :row="scope.row"></slot>
        </template>
      </el-table-column>

      <!--   可展开列   -->
      <el-table-column v-else-if="schema.type === 'expand'" :type="schema.type">
        <template #default="props">
          <div class="box-expand">
            {{ props.row[schema.prop] }}
          </div>
        </template>
      </el-table-column>

      <!--   序号列   -->
      <el-table-column v-else-if="schema.type === 'index'" :type="schema.type" :width="schema.width"
                       :label="schema.label" :align="schema.align"/>

      <!--   普通列   -->
      <el-table-column v-else v-bind="schema"  show-overflow-tooltip/>
    </template>

    <el-table-column
        v-if="!operate.hidden"
        fixed="right"
        align="center"
        label="操作"
    >
      <template #default="scope">
        <slot name="operate" :row="scope.row">
          <el-button
              v-if="!operate.edit.hidden"
              type="primary"
              :icon="Edit"
              size="small"
              @click="$emit('edit', scope.row, scope.$index)"
          ></el-button
          >
          <el-popconfirm
              v-if="!operate.remove.hidden"
              title="确认删除吗"
              @confirm="$emit('remove', scope.row, scope.$index)"
          >
            <template #reference>
              <el-button type="danger" size="small" :icon="Delete"
              ></el-button>
            </template>
          </el-popconfirm>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
  import {Edit, Delete} from '@element-plus/icons-vue'

  defineEmits(['edit', 'remove'])

  defineProps({
    // 表格列的定义
    // [{prop: "列对应的属性名称", slot: '是否使用插槽来自定义展示', label: "列对应的显示名称", width: "列的宽度",
    // fixed: "固定位置，left/right",
    // type: '列的类型，index索引列，expend可展开', align: '对其方式，left / center / right',
    // formatter: 'function(row, column, cellValue, index) 格式化单元格的值，返回值就是显示的值'}]
    // 注意type=expand扩展列放置的位置
    schemas: {
      type: Array,
      required: true
    },
    // 表格数据
    data: {
      required: true,
      type: Array,
      default: () => []
    },
    // 操作配置
    operate: {
      type: Object,
      required: false,
      default: () => ({hidden: false, edit: {hidden: false}, remove: {hidden: false}})
    }
  })
</script>

<style scoped lang="scss">
.container-content {
  width: 100%;
  .box-expand {
    padding: 10px;
  }
}
</style>