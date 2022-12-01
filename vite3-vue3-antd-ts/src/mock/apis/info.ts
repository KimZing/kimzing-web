import info from '../data/info.json'
import { mockRequest } from '@/mock/utils'

// 获取接口分页数据
mockRequest('/info', 'get', info, '获取系统信息')
