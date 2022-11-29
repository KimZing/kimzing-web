import { Page, PageResult } from '@/model'
import { API } from '@/model/api'
import http from '@/utils/http'

// 获取接口分页数据
export const getAPIPage = (page: Page, search: any) => {
  return http.get<PageResult<API>, any>('/interface/list', { ...page, ...search })
}

// 创建或更新API
export const createUpdateAPI = (api: API) => {
  return http.post('/interface', api)
}

// 删除API
export const deleteAPI = (api: API) => {
  return http.delete(`/interface/${api.id}`)
}

// 查询全部AP
export const getAllAPI = () => {
  return http.get<API[]>('/interface/all')
}
