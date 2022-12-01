import http from 'utils/http'
import { Info } from 'models/info'

// 获取基础信息
export const getInfo = () => http.get<Info>('/info')
