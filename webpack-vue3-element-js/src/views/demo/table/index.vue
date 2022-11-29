<template>
  <Table :search-config="getSearchConfig()"
         @search="search"
         :title-config="getTitleConfig()"
         :create-config="getCreateConfig()"
         @create="create"
         :page-config="getPageConfig(page)"
         :table-config="getTableConfig(data)"
         :edit-config="getEditConfig()"
         @remove="remove"
         @edit="edit"
  >
    <!--  在表格中自定义搜索表单的内容  -->
    <template #searchName="{state, schema}">
      <el-input v-model="state[schema.prop]" placeholder="请输入用户名"></el-input>
    </template>
    <!--  自定义列展示  -->
    <template #gender="{row}">
      <el-icon v-if="row.gender=== 'WOMAN'" color="#eca249"><user-filled /></el-icon>
      <el-icon v-else color="#1c9ffb"><user-filled /></el-icon>
    </template>
    <!--  自定义操作  -->
    <!--    <template #operate="{row}">-->
    <!--      {{row.username}}-->
    <!--    </template>-->
  </Table>
</template>

<script setup>
  import Table from '@/components/table'
  import {getCreateConfig} from '@/views/demo/table/config/create'
  import {getEditConfig} from '@/views/demo/table/config/edit'
  import {getSearchConfig} from '@/views/demo/table/config/search'
  import {getTitleConfig} from '@/views/demo/table/config/title'
  import {getTableConfig} from '@/views/demo/table/config/table'
  import {getPageConfig} from '@/views/demo/table/config/page'
  import {getUserList, createUser, removeUser, updateUser} from '@/apis/user'
  import {onMounted, reactive} from 'vue'
  import {ElNotification} from 'element-plus'

  // 初始化创建表单中需要使用的区域列表，表格和分页数据
  const data = reactive([])
  const page = reactive({})
  onMounted(() => {
    search({pageNum: 1, pageSize: 10}, null)
  })

  // 搜索方法
  const search = (state, searchRef) => {
    getUserList(state).then((res) => {
      data.length = 0
      data.push(...res.list)
      page.total= res.total
      page.pageSize= res.pageSize
      page.pageNum= res.pageNum
    })
  }

  // 创建方法
  const create = (state, createRef) => {
    createUser(state).then((res) => {
      ElNotification.success('创建成功')
      search({pageNum: 1, pageSize: 10}, null)
    })
  }

  // 更新方法
  const edit = (state) => {
    updateUser(state).then((res) => {
      ElNotification.success('更新成功')
      search({pageNum: 1, pageSize: 10}, null)
    })
  }

  // 删除方法
  const remove = (row) => {
    removeUser(row.id).then((res) => {
      ElNotification.success('删除成功')
      search({pageNum: 1, pageSize: 10}, null)
    })
  }
</script>

<style scoped lang="scss">
</style>