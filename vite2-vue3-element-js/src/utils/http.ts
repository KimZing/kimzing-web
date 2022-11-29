import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import notice from '@/utils/notice'
import store from '@/store'
import { RootResult } from '@/model'

// 定义请求工具类的接口
export interface IHttp {
  get<R, E = undefined>(url: string, params?: E): Promise<R>
  post<R, E1 = undefined, E2 = undefined>(url: string, data?: E1, params?: E2): Promise<R>
  put<R, E1 = undefined, E2 = undefined>(url: string, data?: E1, params?: E2): Promise<R>
  delete<R, E = undefined>(url: string, params?: E): Promise<R>
}

export interface RequestHook {
  (config: AxiosRequestConfig): AxiosRequestConfig
}

export interface ResponseSuccessHook {
  (response: AxiosResponse<any>): Promise<AxiosResponse<any>>
}

export interface ResponseFailHook {
  (error: any): Promise<never>
}

// 实现类
export class Http implements IHttp {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  setBaseURL(baseURL: string) {
    this.instance.defaults.baseURL = baseURL
  }

  get<R, E = undefined>(url: string, params?: E): Promise<R> {
    return this.request(url, 'GET', params)
  }

  post<R, E1 = undefined, E2 = undefined>(url: string, data?: E1, params?: E2): Promise<R> {
    return this.request(url, 'POST', params, data)
  }

  put<R, E1 = undefined, E2 = undefined>(url: string, data?: E1, params?: E2): Promise<R> {
    return this.request(url, 'PUT', params, data)
  }

  delete<R, E = undefined>(url: string, params?: E): Promise<R> {
    return this.request(url, 'DELETE', params)
  }

  private request<R, E1 = undefined, E2 = undefined>(
    url: string,
    method: Method,
    params?: E1,
    data?: E2
  ): Promise<R> {
    return this.instance.request({
      url,
      method,
      params,
      data
    })
  }

  // 设置请求拦截器
  hookOnRequest(hook: RequestHook): void {
    this.instance.interceptors.request.use(hook)
  }

  // 设置响应拦截器
  hookOnResposne(success: ResponseSuccessHook, fail: ResponseFailHook): void {
    this.instance.interceptors.response.use(success, fail)
  }
}

// ============================== 实现多地址请求请求实例一 ================================

const http = new Http({
  // 请求URL
  baseURL: import.meta.env.VITE_BASE_URL,
  // 超时时间
  timeout: 5000,
  // 错误处理
  validateStatus: (status: number) => status <= 500
})

// 这里利用泛型，约束了项目定义的标准返回值
const responseSuccessHook = (response: AxiosResponse<RootResult<any>>) => {
  // 直接将返回体更改为data，根据项目情况自行修改, 本示例采用{code:string,data:any,message?:string }的形式进行返回
  // code的示例取值：  "0"-成功   "AUTH_1001"-认证失败  ...
  const { code } = response.data
  const { data } = response.data
  const { message } = response.data

  // 如果code为`0`代表成功，直接返回
  if (code === '0') {
    return data
  }
  if (code) {
    // 如果存在code码说明返回包含了标准的错误结构体
    notice(code, message, 'error')
    return Promise.reject()
  }
  // 其他情况则全部拒绝
  notice('系统错误', '', 'error')
  return Promise.reject()
}

const responseFailHook = (error: any) => {
  notice('系统错误', error.message, 'error')
  return Promise.reject(error)
}

// 设置响应钩子
http.hookOnResposne(responseSuccessHook, responseFailHook)

const requestHook = (config: AxiosRequestConfig) => {
  const { token } = store.state.user
  // 设置Header中的Token
  config.headers.Authorization = token
  return config
}

// 设置请求钩子
http.hookOnRequest(requestHook)

export default http

// ============================== 实现多地址请求请求实例二 ================================

const otherHttp = new Http({
  // 请求URL
  baseURL: import.meta.env.VITE_BASE_URL,
  // 超时时间
  timeout: 5000
})

// 设置响应钩子
otherHttp.hookOnResposne(responseSuccessHook, responseFailHook)

// 设置请求钩子
otherHttp.hookOnRequest(requestHook)

export { otherHttp }
