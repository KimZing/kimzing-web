<template>
  <BaseTable v-bind="bookTableProp" @delete="deleteBook">
    <!-- 演示通过slot自定义标题 -->
    <template #search-title="{ field, state }">
      <el-input
        clearable
        prefix-icon="el-icon-notebook-1"
        type="text"
        v-model="state[field.prop]"
        placeholder="自定义插槽"
        clearble
      ></el-input>
    </template>
    <!-- 演示通过插槽，重新定义表格中评分的展示 -->
    <template #table-score="{ row }">
      <el-rate v-model="row.score" disabled> </el-rate>
    </template>
    <!-- 演示自定义操作中的插槽 -->
    <template #action-status="{ row, state }">
      <el-button type="primary" @click="updateStatus(row, state)" icon="'el-icon-edit'">{{
        row.status ? '下架' : '上架'
      }}</el-button>
    </template>
  </BaseTable>
</template>
<script setup lang="ts">
  import BaseTable from '@/components/base-table/index.vue'
  import type { Book } from '@/model/book'
  import * as bookRequest from '@/apis/book'
  import bookTableProp from './config'
  import type { TableState } from '@/components/base-table/types/types'
  import notice from '@/utils/notice'

  // 示例使用自定义删除api
  const deleteBook = (row: Book, state: TableState<Book>) => {
    state.loading = true
    bookRequest.deleteBook(row.id)
    bookRequest
      .getBookPage(state.page, state.search)
      .then(() => {
        state.loading = false
      })
      .catch(() => {
        notice('删除失败')
        state.loading = false
      })
  }

  const updateStatus = (row: Book, state: TableState<Book>) => {
    // 模拟下架调用
    notice(`${row.title}${row.status ? '下架' : '上架'}成功`)
    // 重新获取列表
    state.loading = true
    bookRequest
      .getBookPage(state.page, state.search)
      .then((data) => {
        state.list = data.list
        state.loading = false
      })
      .catch((err) => {
        notice('操作失败', err, 'error')
        state.loading = false
      })
  }
</script>

<style lang="scss" scoped></style>
