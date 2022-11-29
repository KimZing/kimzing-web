// 请求响应体的结构
export interface RootResult<T = any> {
  timestamp?: string
  code: string
  message?: string | undefined
  data: T
}

// 分页信息
export interface Page {
  pageNum: number
  pageSize: number
  total?: number
}

// 请求响应的分页结果
export interface PageResult<T> extends Page {
  list: T[]
}
