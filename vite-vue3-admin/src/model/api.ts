// API信息
export interface API {
  id: number
  method: 'get' | 'put' | 'post' | 'delete'
  path: string
  remark: string
  createTime?: string
  modifyTime?: string
}
