<template>
  <div class="container-base-table full-max">
    <slot name="table-search">
      <CollapseCard
        v-if="showSearch"
        class="table-search"
        :collapse="searchProp?.collapse === undefined ? true : searchProp.collapse"
        :collapse-title="searchProp?.collapseTitle || ''"
      >
        <BaseForm v-bind="searchProp" @submit="handleSearch" @reset="handleSearchReset">
          <template v-for="item in getSlots(searchProp?.schemas)" #[item.slot]="data">
            <slot :name="item.slot" v-bind="data"></slot>
          </template>
        </BaseForm>
      </CollapseCard>
    </slot>
    <slot name="table-title">
      <TableTitle
        class="table-title"
        :title="tableProp?.title || ''"
        :columns="tableProp?.columns"
        :operation="tableProp?.operation"
        @refresh="handleRefresh"
        @clickCreate="clickCreate"
        v-if="tableProp?.showTableTitle === undefined ? true : tableProp.showTableTitle"
      />
    </slot>
    <slot name="table-content">
      <TableContent
        class="table-content"
        @clickUpdate="clickUpdate"
        @handleDelete="handleDelete"
        :tableProp="tableProp"
        :state="state"
      >
        <!-- 也可以使用循环slots的方式，但是这种方式会将父组件所有slots都进行传递，感觉浪费性能了 -->
        <!-- <template v-for="item in Object.keys($slots)" #[item]="data">
          <slot :name="item" v-bind="data"></slot>
        </template> -->
        <template v-for="item in getSlots(tableProp?.columns)" #[item.slot]="data">
          <slot :name="item.slot" v-bind="data"></slot>
        </template>
        <!-- 操作的插槽 -->
        <template v-for="item in tableProp?.operation?.slots" #[item]="data">
          <slot :name="item" v-bind="data"></slot>
        </template>
      </TableContent>
    </slot>
    <slot name="table-page">
      <el-pagination
        v-if="showPage"
        class="table-page"
        v-model:current-page="state.page.pageNum"
        v-model:page-size="state.page.pageSize"
        :page-sizes="tableProp?.page?.pageSizes"
        layout="sizes, prev, pager, next, jumper"
        :total="state.page?.total"
      >
      </el-pagination>
    </slot>
    <slot name="table-create">
      <el-drawer
        v-model="state.createVisible"
        :with-header="false"
        :size="createWidth"
        v-if="showCreate && createMode === 'drawer'"
      >
        <BaseForm v-bind="createProp" @submit="handleCreate" @reset="resetCreate">
          <template v-for="item in getSlots(createProp?.schemas)" #[item.slot]="data">
            <slot :name="item.slot" v-bind="data"></slot>
          </template>
        </BaseForm>
      </el-drawer>
      <el-dialog
        title="新增"
        v-model="state.createVisible"
        :width="createWidth + 'px'"
        v-if="showCreate && createMode === 'dialog'"
      >
        <BaseForm v-bind="createProp" @submit="handleCreate" @reset="resetCreate">
          <template v-for="item in getSlots(createProp?.schemas)" #[item.slot]="data">
            <slot :name="item.slot" v-bind="data"></slot>
          </template>
        </BaseForm>
      </el-dialog>
    </slot>
    <slot name="table-update">
      <el-drawer
        v-model="state.updateVisible"
        :with-header="false"
        :size="updateWidth"
        destroy-on-close
        v-if="showUpdate && createMode === 'drawer'"
      >
        <BaseForm v-bind="updateProp" @submit="handleUpdate" @reset="resetUpdate"
          ><template v-for="item in getSlots(updateProp?.schemas)" #[item.slot]="data">
            <slot :name="item.slot" v-bind="data"></slot> </template
        ></BaseForm>
      </el-drawer>
      <el-dialog
        title="更新"
        :width="updateWidth + 'px'"
        v-model="state.updateVisible"
        destroy-on-close
        v-if="showUpdate && createMode === 'dialog'"
      >
        <BaseForm v-bind="updateProp" @submit="handleUpdate" @reset="resetUpdate"
          ><template v-for="item in getSlots(updateProp?.schemas)" #[item.slot]="data">
            <slot :name="item.slot" v-bind="data"></slot> </template
        ></BaseForm>
      </el-dialog>
    </slot>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, watch } from 'vue'
  import type { Page } from '@/model'
  import BaseForm from '@/components/base-form/index.vue'
  import notice from '@/utils/notice'
  import TableTitle from './components/table-title/index.vue'
  import { baseTableProps } from './props'
  import CollapseCard from '../collapse-card/index.vue'
  import type { TableState } from './types/types'
  import { useT } from '@/locals'
  import TableContent from './components/table-content/index.vue'

  const props = defineProps(baseTableProps)

  const state = reactive<TableState<any>>({
    list: [],
    page: { pageNum: 1, pageSize: 10, total: 0 },
    search: {},
    loading: false,
    createVisible: false,
    updateVisible: false
  })

  const t = useT()

  const emit = defineEmits([
    'clickCreate',
    'clickUpdate',
    'resetCreate',
    'resetUpdate',
    'resetSearch',
    'search',
    'refresh',
    'create',
    'delete',
    'update',
    'read'
  ])

  // 查询数据
  const handleRead = (page?: Page, search?: any) => {
    if (!page || !page.pageNum || !page.pageSize) {
      page = { pageNum: 1, pageSize: 10 }
    }

    // 如果read有函数传递，则调用，没有则发射对应的读事件
    if (props.methods?.read) {
      state.loading = true
      props.methods
        .read(page, search)
        .then((data) => {
          state.list = data.list
          state.page = { pageNum: data.pageNum, pageSize: data.pageSize, total: data.total }
          state.loading = false
        })
        .catch((err) => {
          notice('信息获取失败', err.msg, 'error')
          state.loading = false
        })
    } else {
      emit('read', state)
    }
  }

  // 条件搜索
  const handleSearch = (search: any) => {
    state.search = search
    if (props.methods?.read) {
      handleRead(undefined, search)
    } else {
      emit('search', state)
    }
  }

  // 清空搜索
  const handleSearchReset = () => {
    state.search = {}
    if (props.methods?.read) {
      handleRead()
    } else {
      emit('resetSearch', state)
    }
  }

  watch(
    () => state.page.pageNum,
    (pageNum) => {
      if (props.methods?.read) {
        handleRead(state.page, state.search)
      } else {
        emit('read', state)
      }
    }
  )
  watch(
    () => state.page.pageSize,
    (pageSize) => {
      if (props.methods?.read) {
        handleRead(state.page, state.search)
      } else {
        emit('read', state)
      }
    }
  )

  // 点击新增按钮
  const clickCreate = () => {
    state.createVisible = true
    emit('clickCreate')
  }

  // 点击编辑按钮
  const clickUpdate = (row: any) => {
    state.updateVisible = true
    // 赋予初始值
    props.updateProp?.schemas.forEach((s) => {
      s.defaultValue = row[s.prop]
    })
    emit('clickUpdate', props.updateProp?.schemas, row)
  }

  // 新增
  const handleCreate = (data: any, createForm: any) => {
    createForm.validate().then(() => {
      // 如果create有函数传递，则直接调用并刷新列表，否则发射对应的事件
      if (props.methods?.create) {
        props.methods
          .create(data)
          .then(() => {
            state.createVisible = false
            handleRead(undefined, state.search)
          })
          .catch((err) => {
            notice('创建失败', err, 'error')
          })
      } else {
        emit('create', data, state)
      }
    })
  }

  // 新增的重置
  const resetCreate = () => {
    emit('resetCreate')
  }

  // 更新
  const handleUpdate = (data: any, updateForm: any) => {
    updateForm.validate().then(() => {
      // 如果update有函数传递，则直接调用并刷新列表，否则发射对应的事件
      if (props.methods?.update) {
        props.methods
          .update(data)
          .then(() => {
            state.updateVisible = false
            handleRead(undefined, state.search)
          })
          .catch((err) => {
            notice('更新失败', err, 'error')
          })
      } else {
        emit('update', data, state)
      }
    })
  }

  // 更新的重置
  const resetUpdate = () => {
    emit('resetUpdate')
  }

  // 删除
  const handleDelete = (row: any) => {
    // 如果update有函数传递，则直接调用并刷新列表，否则发射对应的事件
    if (props.methods?.delete) {
      props.methods
        .delete(row)
        .then(() => {
          handleRead(undefined, state.search)
        })
        .catch((err) => {
          notice('删除失败', err, 'error')
        })
    } else {
      emit('delete', row, state)
    }
  }

  // 刷新
  const handleRefresh = () => {
    if (props.methods?.read) {
      handleRead(state.page, state.search)
    } else {
      emit('refresh', state)
    }
  }

  const getSlots = (data: any) => {
    if (!data) {
      return []
    }
    return data
      .filter((d: { slot?: string }) => d.slot !== undefined)
      .map((d: { slot: string }) => ({ slot: d.slot }))
  }

  onMounted(() => {
    if (props.methods?.read) {
      handleRead()
    }
  })
</script>

<style lang="scss">
  .container-base-table {
    display: flex;
    flex-direction: column;
    .table-search {
      padding: 0 5px;
      margin-bottom: 8px;
    }
    .table-title {
      background-color: #fff;
      padding: 5px;
      margin-bottom: 2px;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
    .table-content {
      overflow: auto;
    }
    .table-page {
      margin-top: 8px;
      padding: 5px 5px;
      background-color: #fff;

      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .el-collapse-item__wrap {
      border-bottom: none;
    }
    .el-collapse {
      border: none;
    }
    .el-collapse-item__header {
      border: none;
    }
    .el-drawer__body {
      padding: 15px 10px;
    }
  }
</style>
