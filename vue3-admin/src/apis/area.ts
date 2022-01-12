import { Area } from '@/model/area'
import http from '@/utils/http'

// 获取所有区域
export const getAllArea = () => {
  return http.get<Area[]>('/area/all')
}
