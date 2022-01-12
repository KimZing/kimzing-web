import Mock from 'mockjs'
import { RootResult, Page } from '@/model'
import notice from '@/utils/notice'
import { getQueryVariable } from '@/utils/url'

// 基础mockurl
export const MOCK_BASE_URL = import.meta.env.VITE_BASE_URL

// 创建普通响应体结构
export function createResponse<T>(t: T): RootResult<T> {
  return {
    code: '0',
    data: t
  }
}

// 创建分页响应体结构
export function createPage<T>(t: T[]): { list: T[] } & Page {
  return {
    total: 200,
    pageSize: 20,
    pageNum: 1,
    list: t
  }
}

// 封装mock请求
export const mock = (
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data: any,
  message: string = '请求信息'
) => {
  Mock.mock(RegExp(`${MOCK_BASE_URL}${url}`), method, (options: any) => {
    notice(message, options)
    // 凑活着处理下分页的动态封装
    const pageNum: number = parseInt(getQueryVariable(options.url, 'pageNum') as string, 10)
    const pageSize = parseInt(getQueryVariable(options.url, 'pageSize') as string, 10)
    if (pageNum && pageSize) {
      data.pageNum = pageNum
      data.pageSize = pageSize
    }

    return Mock.mock(createResponse(data))
  })
}
