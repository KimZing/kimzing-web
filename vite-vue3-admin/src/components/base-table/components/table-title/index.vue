<template>
  <div class="title-wrapper">
    <div class="title">{{ title }}</div>
    <div class="operation">
      <div v-if="showCreate(operation)">
        <el-button
          type="primary"
          :icon="operation?.createIcon || 'el-icon-document-add'"
          @click="$emit('clickCreate')"
          >{{
            operation?.createText === undefined
              ? t('component.table.create')
              : operation?.createText
          }}</el-button
        >
      </div>
      <div v-if="operation?.showExport === undefined ? true : operation?.showExport">
        <el-tooltip effect="dark" :content="t('component.table.export')" placement="bottom">
          <i
            class="el-icon-download"
            @click="
              () => {
                exportTable()
              }
            "
          ></i>
        </el-tooltip>
      </div>
      <div v-if="operation?.showRefresh === undefined ? true : operation?.showRefresh">
        <el-tooltip effect="dark" :content="t('component.table.refresh')" placement="bottom">
          <i
            class="el-icon-refresh"
            :class="{ 'refresh-element': refresh }"
            @click="
              () => {
                refreshTable()
                $emit('refresh')
              }
            "
          ></i>
        </el-tooltip>
      </div>
      <div v-if="operation?.showSetting === undefined ? true : operation.showSetting">
        <el-popover placement="bottom" :width="200" trigger="click">
          <template #reference>
            <i class="el-icon-setting"></i>
          </template>
          <el-row v-for="item in columns" :key="item.prop">
            <el-col :span="12"
              ><el-checkbox :checked="!item.hidden" @change="changeColumnVisible(item)">{{
                item.title
              }}</el-checkbox></el-col
            >
            <el-col :span="6" @click="fixedColumn(item, 'left')"
              ><i class="el-icon-arrow-left" style="width: 100%" />
            </el-col>
            <el-col :span="6" @click="fixedColumn(item, 'right')"
              ><i class="el-icon-arrow-right" />
            </el-col>
          </el-row>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue'
  import { ref } from 'vue'
  import { hasPermission } from '@/utils/permission'
  import { exportExcel } from '@/utils/excel'
  import { useT } from '@/locals'
  import type { Column, TableProp } from '../../types/types'

  const t = useT()

  const props = defineProps({
    title: {
      type: String as PropType<string>,
      default: ''
    },
    columns: {
      type: Array as PropType<Column[]>,
      default: () => []
    },
    operation: {
      type: Object as PropType<TableProp['operation']>
    }
  })

  defineEmits(['clickCreate', 'refresh'])

  // 刷新table功能
  // 控制刷新按钮动画
  const refresh = ref(false)
  // 刷新主体内容，将main的可视化从true设置为false，500毫秒后再设置为true
  const refreshTable = () => {
    refresh.value = true
    // 300毫秒后重新渲染当前主体组件
    setTimeout(() => {
      refresh.value = false
    }, 200)
  }

  // 改变
  const changeColumnVisible = (item: Column) => {
    item.hidden = !item.hidden
  }

  // 固定列
  const fixedColumn = (item: Column, position: string) => {
    item.fixed = position as any
  }

  const showCreate = (operation: TableProp['operation']) => {
    // 如果不显示直接返回
    if (operation?.showCreate === false) {
      return false
    }
    if (!operation?.createPermission) {
      return true
    }
    return hasPermission(operation.createPermission)
  }

  // 导出表格
  const exportTable = () => {
    exportExcel('base-table', props.title)
  }
</script>

<style lang="scss">
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    .title {
      color: #999;
      display: flex;
      align-items: center;
    }
    .operation {
      display: flex;
      align-items: center;
      & > * {
        display: flex;
        align-items: center;
        margin: 0 10px;
        font-size: 20px;
        font-weight: 1000;
        height: 100%;
      }
    }
  }
</style>
