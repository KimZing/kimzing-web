<template>
  <CollapseCard>
    <!--id是用来导出表格用的-->
    <el-table
      id="base-table"
      v-loading="state.loading"
      element-loading-text="Loading"
      element-loading-spinner="el-icon-loading"
      :data="state.list"
      :highlight-current-row="
        tableProp.highlightCurrentRow === undefined ? true : tableProp.highlightCurrentRow
      "
      :size="tableProp.size === undefined ? '' : tableProp.size"
      :stripe="tableProp.stripe === undefined ? true : tableProp.stripe"
      :border="tableProp.border === undefined ? true : tableProp.border"
      :height="tableProp.height"
    >
      <template v-for="item in tableProp.columns" :key="item.prop">
        <!-- 插槽列 -->
        <el-table-column
          v-if="item.slot"
          :sortable="item.sortable === undefined ? true : item.sortable"
          :prop="item.prop"
          :label="item.title"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align || 'center'"
          :show-overflow-tooltip="
            item.showOverflowTooltip == undefined ? true : item.showOverflowTooltip
          "
          :formatter="item.formatter"
        >
          <template #default="scope">
            <slot :name="item.slot" :item="item" :row="scope.row" :state="state"> </slot>
          </template>
        </el-table-column>
        <!-- 普通列 -->
        <el-table-column
          v-else-if="!item.hidden && item.type === undefined"
          :sortable="item.sortable === undefined ? true : item.sortable"
          :prop="item.prop"
          :label="item.title"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align || 'center'"
          :show-overflow-tooltip="
            item.showOverflowTooltip == undefined ? true : item.showOverflowTooltip
          "
          :formatter="item.formatter"
        >
        </el-table-column>
        <!-- 特殊列 -->
        <el-table-column
          v-else-if="!item.hidden && item.type"
          :type="item.type"
          :prop="item.prop"
          :label="item.title"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align || 'center'"
        >
          <template v-if="item.expendForm" #default="scope">
            <BaseForm v-bind="item.expendForm ? item.expendForm(scope.row) : {}"></BaseForm>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        :fixed="tableProp.operation?.fixed === undefined ? 'right' : tableProp.operation?.fixed"
        align="center"
        :label="tableProp.operation?.operationTitle || t('component.table.action')"
        :width="tableProp.operation?.width || 210"
        v-if="
          tableProp.operation?.showOperation === undefined
            ? true
            : tableProp.operation?.showOperation
        "
      >
        <template #default="scope">
          <slot name="operation" :scope="scope">
            <!-- 扩展的插槽 -->
            <slot
              v-for="slot in tableProp.operation?.slots"
              :name="slot"
              :index="scope.$index"
              :row="scope.row"
              :state="state"
            ></slot>
            <el-button
              v-if="showUpdateButton(tableProp.operation)"
              type="primary"
              @click="$emit('clickUpdate', scope.row)"
              :icon="tableProp.operation?.updateIcon || 'el-icon-edit'"
              >{{
                tableProp.operation?.updateText === undefined
                  ? t('component.table.update')
                  : tableProp.operation?.updateText
              }}</el-button
            >
            <el-popconfirm
              v-if="showDeleteButton(tableProp.operation)"
              :title="tableProp.operation?.deleteMessage || t('component.table.deleteMessage')"
              @confirm="$emit('handleDelete', scope.row)"
            >
              <template #reference>
                <el-button
                  type="danger"
                  :icon="tableProp.operation?.deleteIcon || 'el-icon-delete'"
                  >{{
                    tableProp.operation?.deleteText === undefined
                      ? t('component.table.delete')
                      : tableProp.operation?.deleteText
                  }}</el-button
                >
              </template>
            </el-popconfirm>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </CollapseCard>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue'
  import BaseForm from '@/components/base-form/index.vue'
  import CollapseCard from '@/components/collapse-card/index.vue'
  import { useT } from '@/locals'
  import type { TableProp, TableState } from '../../types/types'
  import { hasPermission } from '@/utils/permission'

  const t = useT()

  defineProps({
    tableProp: {
      type: Object as PropType<TableProp>,
      default: () => {}
    },
    state: {
      type: Object as PropType<TableState<any>>,
      default: () => {}
    }
  })

  defineEmits(['clickUpdate', 'handleDelete'])

  // 是否展示编辑，内部会根据权限判断
  const showUpdateButton = (operation: TableProp['operation']): boolean => {
    // 如果不显示直接返回
    if (operation?.showUpdate === false) {
      return false
    }
    if (!operation?.updatePermission) {
      return true
    }
    return hasPermission(operation.updatePermission)
  }
  // 是否展示delete，内部会判断权限
  const showDeleteButton = (operation: TableProp['operation']) => {
    // 如果不显示直接返回
    if (operation?.showDelete === false) {
      return false
    }
    if (!operation?.deletePermission) {
      return true
    }
    return hasPermission(operation.deletePermission)
  }
</script>
