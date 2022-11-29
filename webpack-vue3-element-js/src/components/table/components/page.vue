<template>
  <div class="container-page">
    <el-pagination
        :currentPage="page.pageNum"
        :page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :small="true"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :page-count="Math.ceil(page.total/page.pageSize)"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>

  const props = defineProps({
    page: {
      type: Object,
      required: false,
      default: () => ({pageNum: 1, pageSize: 10, total: 0})
    }
  })

  const emit = defineEmits(['changePage'])

  const handleSizeChange = (val) => {
    emit('changePage', {pageNum: props.page.pageNum, pageSize: val})

  }
  const handleCurrentChange = (val) => {
    emit('changePage', {pageNum: val, pageSize: props.page.pageSize})
  }
</script>

<style scoped lang="scss">
.container-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>