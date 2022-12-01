import info from '../../data/info.json'
import { mock } from '@/mock'

// 获取接口分页数据
mock('/info', 'get', info, '获取系统信息')
