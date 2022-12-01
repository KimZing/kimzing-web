import http from 'utils/http'

interface Info {
  name: string,
  status: 'up' | 'down'
}

// 获取基础信息
export const getInfo = () => http.get<Info>('/info')