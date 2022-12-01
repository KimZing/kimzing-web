export interface Response<T> {
  timestamp: number
  code: string
  message?: string
  data?: T
}
