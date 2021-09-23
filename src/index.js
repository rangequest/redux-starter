import { produce } from 'immer'

let book = { title: 'Harry Potter' }
console.log(book)
console.log(
  produce(book, draftBook => {
    draftBook.isPublished = true
  })
)
