<template>
  <div class="container-table">
    <Form class="search shadow" v-if="!searchConfig.hidden" v-bind="searchConfig" @submit="search" @reset="search">
      <template v-for="schema in searchConfig.schemas.filter(s => !!s.slot)" #[schema.slot]="data">
        <slot :name="schema.slot" v-bind="data"></slot>
      </template>
    </Form>
    <Title class="title shadow" v-if="!titleConfig.hidden" @create="showCreate" :useCreate="!createConfig.hidden"
           :title="titleConfig.title"></Title>
    <Content class="content shadow" v-bind="tableConfig" @edit="showEdit" @remove="(row, index) => emit('remove', row, index)">
      <!--   传递表格中的插槽   -->
      <template v-for="schema in tableConfig.schemas.filter(s => !!s.slot)" #[schema.slot]="data">
        <slot :name="schema.slot" v-bind="data"></slot>
      </template>
      <!-- 操作的插槽 -->
      <template #operate="data">
        <slot name="operate" v-bind="data"></slot>
      </template>
    </Content>
    <Page class="page shadow" v-if="!pageConfig.hidden" v-bind="pageConfig" @changePage="changePage"></Page>
    <el-drawer v-model="state.showCreate" title="新增" direction="rtl" destroy-on-close size="50%">
      <slot name="create">
        <Form class="create" v-bind="createConfig"
              @submit="(createState, createRef) => {emit('create', createState, createRef);state.showCreate=false}">
          <template v-for="schema in createConfig.schemas.filter(s => !!s.slot)" #[schema.slot]="data">
            <slot :name="schema.slot" v-bind="data"></slot>
          </template>
        </Form>
      </slot>
    </el-drawer>
    <el-drawer v-model="state.showEdit" title="编辑" direction="rtl" destroy-on-close size="50%">
      <slot name="edit">
        <Form class="edit" v-bind="editConfig"
              @submit="onEdit">
          <template v-for="schema in editConfig.schemas.filter(s => !!s.slot)" #[schema.slot]="data">
            <slot :name="schema.slot" v-bind="data"></slot>
          </template>
        </Form>
      </slot>
    </el-drawer>
  </div>
</template>

<script setup>
  import Form from '@/components/form'
  import Title from '@/components/table/components/title'
  import Content from '@/components/table/components/content'
  import Page from '@/components/table/components/page'
  import {reactive} from 'vue'
  import {ElNotification} from 'element-plus'

  const props = defineProps({
    // 搜索表单配置，同form配置
    searchConfig: {
      type: Object,
      required: false,
      default: () => ({hidden: false})
    },
    titleConfig: {
      type: Object,
      required: false,
      default: () => ({hidden: false})
    },
    // 创建表单配置，同form配置
    createConfig: {
      type: Object,
      required: false,
      default: () => ({hidden: false})
    },
    // 表格配置,具体配置见子组件table.vue
    tableConfig: {
      type: Object,
      required: true
    },
    // 分页配置
    pageConfig: {
      type: Object,
      required: false,
      default: () => ({hidden: false})
    },
    // 编辑表单配置，同form配置
    editConfig: {
      type: Object,
      required: false,
      default: () => ({hidden: false})
    }
  })

  const emit = defineEmits(['create', 'remove', 'edit', 'search'])

  const state = reactive({
    // 是否显示创建窗口
    showCreate: false,
    // 是否显示编辑窗口
    showEdit: false,
    // 缓存的搜索条件
    search: {},
    // 缓存当前编辑的数据的index
    index: undefined
  })

  // 重置当前分页信息，并发送搜索事件
  const search = (searchState, searchRef) => {
    // 保存搜索条件
    state.search = searchState
    // 分页与不分页的处理
    if (!props.pageConfig.hidden) {
      emit('search', {...searchState, pageNum: 1, pageSize: 10}, searchRef)
    } else {
      emit('search', searchState, searchRef)
    }
  }

  // 显示编辑表单
  const showEdit = (row, index) => {
    state.index = index
    state.showEdit = true
    // 赋予初始值, 配合drawer的destroy-on-close来使用，使得每次都是最新值
    if (props.editConfig.schemas) {
      props.editConfig.schemas.forEach((s) => {
        if (row[s.prop]) {
          s.default = row[s.prop]
        }
      })
    }
  }

  const onEdit = (editState, editRef) => {
    editRef.value.validate().then(() => {
      emit('edit', editState, state.index,  editRef)
      state.showEdit=false
    }).catch((err) => {
      ElNotification.error('参数校验失败')
    })
  }

  // 显示创建页面
  const showCreate = () => {
    state.showCreate = true
  }

  // 分页更改，同时携带当前查询参数
  const changePage = (page) => {
    emit('search', {...state.search, ...page}, null)
  }

</script>

<style scoped lang="scss">
.container-table {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  // 设置所有子模块的样式
  > * {
    margin: 0 0 10px 0;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
  }

  .search {
    // 与内部的margin-bottom: 18px抵消，使元素居中
    padding: 18px 5px 0px 10px;
  }

  .title {
    margin: 0 0 5px 0;
  }

  .content {
    margin: 0 0 5px 0;
    overflow: auto;
  }

  .page {
    margin: 0;
  }
}

</style>