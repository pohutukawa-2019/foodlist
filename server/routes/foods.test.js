require('babel-polyfill')

const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

beforeEach(() => {
  db.reset()
})

describe('Category routes', () => {
  it('GET /categories returns a list of catagories', () => {
    const expected = 6

    return request(server)
      .get('/api/v1/categories')
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
      })
  })
})

describe('Foods routes', () => {
  it('DEL / deletes a food', () => {
    const expected = 5

    return request(server)
      .delete('/api/v1/foods/') // put your route here
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
      })
  })
})

// router.delete('/', (req, res) => {
//   const foodId = req.body.id
//   db.deleteFoodById(foodId)
//     .then(res.redirect('/'))
// })