import { Random } from 'mockjs'
import type { Book } from '@/model/book'

let num = 1
export const bookList: Book[] = []

while (num <= 25) {
  bookList.push({
    id: Random.integer(1),
    title: Random.name(false),
    status: Random.boolean(),
    language: 'EN',
    score: Random.integer(1, 5),
    sold: Random.integer(5, 10000),
    price: Random.integer(10, 50),
    publishTime: Random.datetime('yyyy-MM-dd HH:mm'),
    authorName: Random.cname(),
    authorEmail: Random.email(),
    authorPhone: '18889988998',
    authorAddress: Random.county(true)
  })
  num += 1
}
