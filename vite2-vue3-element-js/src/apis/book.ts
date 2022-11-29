import { Page, PageResult } from '@/model'
import { Book } from '@/model/book'
import http from '@/utils/http'

// 创建或更新书籍
export const createUpdateBook = (book: Book) => {
  return http.put('/book', book)
}

// 获取书籍分页数据
export const getBookPage = (page: Page, search: any) => {
  return http.get<PageResult<Book>, any>('/book/list', { ...page, ...search })
}

// 删除书籍
export const deleteBook = (id: number) => {
  return http.delete(`/book/${id}`)
}
