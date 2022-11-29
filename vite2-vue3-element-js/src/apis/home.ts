import { Analysis } from '@/model/home'
import http from '@/utils/http'

// 获取分析数据
export const getAnalysisData = () => {
  return http.get<Analysis>('/analysis')
}
