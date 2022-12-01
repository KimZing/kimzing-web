import './apis/info'
import Mock from 'mockjs'
import notice from '@/utils/notice'
import { Response } from 'models/common'

// 基础mockurl
const MOCK_BASE_URL = import.meta.env.VITE_BASE_URL

// 创建普通响应体结构
function createResponse<T>(data: T): Response<T> {
  return {
    timestamp: new Date().valueOf(),
    code: '0',
    data
  }
}

// 封装mock请求
export const mock = (url: string, method: 'get' | 'post' | 'put' | 'delete', data: any, message = '请求信息') => {
  Mock.mock(RegExp(`${MOCK_BASE_URL}${url}`), method, (options: any) => {
    notice.info(message, JSON.stringify(options))
    return Mock.mock(createResponse(data))
  })
}
