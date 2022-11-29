import service from '@/utils/http'

// 获取城市列表
export const getRegionList = () => {
    return service.get('/base/region/list')
}