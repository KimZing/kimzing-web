import { Page } from '@/model'
import { BaseFormProps } from '../../base-form/types/props'

export interface Column {
  type?: 'index' | 'selection' | 'expand'
  title: string
  prop: string
  // 插槽名
  slot?: string
  width?: number
  align?: 'left' | 'center' | 'right'
  hidden?: boolean
  fixed?: 'right' | 'left'
  sortable?: boolean
  showOverflowTooltip?: boolean
  expendForm?: (data: any) => BaseFormProps
  formatter?: (row: any, column: any, cellValue?: any, index?: number) => string
}

export interface SearchProp extends BaseFormProps {
  // 搜索栏是否可折叠
  collapse?: boolean
  // 折叠栏名称
  collapseTitle?: string
}

export interface TableProp {
  // 是否展示表格的自定义表头
  showTableTitle?: boolean
  // 表格标题
  title?: string
  // 高度
  height?: string
  // 斑马间隔
  stripe?: boolean
  // 边框
  border?: boolean
  // 表格大小
  size?: 'medium' | 'small' | 'mini'
  // 高亮当前行
  highlightCurrentRow?: boolean
  // 列头
  columns: Column[]
  // 分页选项配置
  page?: {
    pageSizes?: number[]
  }
  // 操作配置
  operation?: {
    // 是否隐藏操作
    showOperation?: boolean
    // 需要扩展的操作插槽名
    slots?: string[]
    // 操作列属性
    operationTitle?: string
    fixed?: 'left' | 'right'
    width?: number
    // 是否显示新增
    showCreate?: boolean
    // 新增
    createPermission?: string
    // 新增图标文字
    createText?: string
    // 新增图标
    createIcon?: string
    // 显示导出
    showExport?: boolean
    // 显示刷新
    showRefresh?: boolean
    // 显示设置
    showSetting?: boolean
    // 是否显示编辑
    showUpdate?: boolean
    // 编辑权限
    updatePermission?: string
    // 编辑图标文字
    updateText?: string
    // 编辑图标
    updateIcon?: string
    // 是否展示删除
    showDelete?: boolean
    // 删除权限
    deletePermission?: string
    // 删除提示
    deleteMessage?: string
    // 删除文字
    deleteText?: string
    // 删除图标
    deleteIcon?: string
  }
}

// 内部操作的api
export interface Methods {
  create?: (data: any) => Promise<any>
  delete?: (data: any) => Promise<any>
  update?: (data: any) => Promise<any>
  read?: (page: Page, search: any) => Promise<any>
}

export interface BaseTableProp {
  // 搜索栏配置
  showSearch?: boolean
  searchProp?: SearchProp
  // 新增页配置
  showCreate?: boolean
  createMode?: 'drawer' | 'dialog'
  createWidth?: number
  createProp?: BaseFormProps
  // 更新页配置
  showUpdate?: boolean
  updateMode?: 'drawer' | 'dialog'
  updateWidth?: number
  updateProp?: BaseFormProps
  // 表格配置
  tableProp: TableProp
  // 是否展示分页
  showPage?: boolean
  // 响应的操作方法
  methods?: Methods
}

export interface TableState<T> {
  list: T[]
  page: Page
  search: any
  loading: boolean
  createVisible: boolean
  updateVisible: boolean
}
