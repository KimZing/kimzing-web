export interface GrowCard {
  title: string
  unit: string
  unitType: '' | 'success' | 'info' | 'warning' | 'danger'
  value: number
  icon: string
  total: number
}

// 首页的数据分析
export interface Analysis {
  growCards?: GrowCard[]
}
