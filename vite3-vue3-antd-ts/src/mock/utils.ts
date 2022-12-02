import { Response } from '@/models/common'
import Mock from 'mockjs'
import notice from '@/utils/notice'

function createResponse<T>(data: T): Response<T> {
  return {
    timestamp: new Date().valueOf(),
    code: '0',
    data
  }
}
// 基础mockurl
const MOCK_BASE_URL = import.meta.env.VITE_BASE_URL
export const mockRequest = (
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data: any,
  message = '请求信息'
) => {
  Mock.mock(RegExp(`${MOCK_BASE_URL}${url}`), method, (options: any) => {
    notice.info(message, JSON.stringify(options))
    return Mock.mock(createResponse(data))
  })
}
