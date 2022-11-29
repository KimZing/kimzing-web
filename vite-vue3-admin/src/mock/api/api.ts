import { allAPI, apiList } from '../data/api'
import { createPage, mock } from '../utils/mock'

// 获取接口分页数据
mock('/interface/list', 'get', createPage(apiList), '获取接口列表')

// 创建或更新API
mock('/interface', 'post', null, '创建/更新接口')

// 删除API
mock('/interface/[0-9].*', 'delete', null, '删除接口')

// 查询全部AP
mock('/interface/all', 'get', allAPI, '获取所有接口')
