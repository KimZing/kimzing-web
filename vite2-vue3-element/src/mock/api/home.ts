import { Random } from 'mockjs'
import { mock } from '../utils/mock'
import { Analysis } from '@/model/home'
import LogoImage from '@/assets/images/logo/logo.png'

const analysisData: Analysis = {
  growCards: [
    {
      title: '访问数',
      icon: LogoImage,
      value: Random.integer(1000, 10000),
      total: Random.integer(11000, 20000),
      unitType: '',
      unit: '月'
    },
    {
      title: '成交额',
      icon: LogoImage,
      value: Random.integer(1000, 10000),
      total: Random.integer(11000, 20000),
      unitType: 'success',
      unit: '月'
    },
    {
      title: '下载数',
      icon: LogoImage,
      value: Random.integer(1000, 10000),
      total: Random.integer(11000, 20000),
      unitType: 'danger',
      unit: '周'
    },
    {
      title: '成交数',
      icon: LogoImage,
      value: Random.integer(1000, 10000),
      total: Random.integer(11000, 20000),
      unitType: 'warning',
      unit: '年'
    }
  ]
}
mock('/analysis', 'get', analysisData, '获取分析数据')
