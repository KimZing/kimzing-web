import { createPage, mock } from '../utils/mock'
import { bookList } from '../data/book'

// 创建或更新书籍
mock('/book', 'put', null, '创建/更新书籍')

// 获取书籍分页数据
mock('/book/list', 'get', createPage(bookList), '获取书籍列表')

// 删除书籍
mock('/book/[0-9].*', 'delete', null, '删除书籍')
