// 书籍信息
export interface Book {
  id: number
  // 上下架
  status: boolean
  title: string
  language: 'EN' | 'ZH'
  price: number
  score: number
  sold: number
  publishTime: string
  authorName: string
  authorPhone: string
  authorEmail: string
  authorAddress: string
}
