import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import notice from 'utils/notice'

// 后端通用响应体
interface Response<T> {
  timestamp: number
  code: string
  message?: string
  data?: T
}

// 定义请求接口
interface IHttp {
  get<R, E = {}>(url: string, params?: E): Promise<R>
  post<R, E1 = {}, E2 = {}>(url: string, data: E1, params?: E2): Promise<R>
  put<R, E1 = {}, E2 = {}>(url: string, data: E1, params?: E2): Promise<R>
  delete<R, E = {}>(url: string, params?: E): Promise<R>
}

interface RequestHook {
  (config: AxiosRequestConfig): AxiosRequestConfig
}

interface ResponseSuccessHook {
  (response: AxiosResponse<Response<any>>): Promise<AxiosResponse<any>>
}

interface ResponseFailHook {
  (error: any): Promise<never>
}

// 实现类
class Http implements IHttp {
  private instance: AxiosInstance

  constructor (config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  get<R, E = {}> (url: string, params?: E): Promise<R> {
    return this.instance.request({ url, method: 'GET', params })
  }

  post<R, E1 = {}, E2 = {}> (url: string, data: E1, params?: E2): Promise<R> {
    return this.instance.request({ url, method: 'POST', params, data })
  }

  put<R, E1 = {}, E2 = {}> (url: string, data: E1, params?: E2): Promise<R> {
    return this.instance.request({ url, method: 'PUT', params, data })
  }

  delete<R, E = {}> (url: string, params?: E): Promise<R> {
    return this.instance.request({ url, method: 'DELETE', params })
  }

  // 设置请求拦截器
  hookOnRequest (hook: RequestHook): void {
    this.instance.interceptors.request.use(hook)
  }

  // 设置响应拦截器
  hookOnResponse (success: ResponseSuccessHook, fail: ResponseFailHook): void {
    this.instance.interceptors.response.use(success, fail)
  }
}

// ============================== 实现请求实例一 ================================

const http = new Http({
  // 请求URL
  baseURL: import.meta.env.VITE_BASE_URL,
  // 超时时间
  timeout: 5000,
  // 错误处理
  validateStatus: (status: number) => status <= 500
})

// 这里利用泛型，约束了项目定义的标准返回值
const responseSuccessHook = (response: AxiosResponse<Response<any>>) => {
  // 直接将返回体更改为data，根据项目情况自行修改, 本示例采用{timestamp: number, code:string, data:any, message?:string }的形式进行返回
  // code的示例取值：  "0"-成功   "AUTH_1001"-认证失败  ...
  const { code } = response.data
  const { data } = response.data
  const { message } = response.data

  // 如果code为`0`代表成功，直接返回
  if (code === '0') {
    return data
  }

  // 如果存在code码说明返回包含了标准的错误结构体
  if (code) {
    notice.error(code, message)
    return Promise.reject()
  }

  // 其他情况则全部拒绝
  notice.error('系统错误', '请联系管理员')
  return Promise.reject()
}

const responseFailHook = (error: any) => {
  notice.error('系统错误', error.message)
  return Promise.reject(error)
}

// 设置响应钩子
http.hookOnResponse(responseSuccessHook, responseFailHook)

const requestHook = (config: AxiosRequestConfig) => {
  // 设置Header中的Token
  config.headers!.Authorization = 'S123'
  return config
}

// 设置请求钩子
http.hookOnRequest(requestHook)

export default http