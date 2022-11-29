import { mock } from '../utils/mock'
import { allArea } from '../data/area'

// 获取所有区域
mock('/area/all', 'get', allArea, '获取区域')
