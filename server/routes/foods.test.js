require('babel-polyfill')

const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

beforeEach(() => {
  db.reset()
})

describe('Category routes', () => {
  it('GET /categories returns a list of categories', () => {
    const expected = 6

    return request(server)
      .get('/api/v1/categories/')
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
      })
  })
})

describe('Food routes', () => {
  it('POST / new food add + return id of new food', () => {
    const expected = 7

    const newFoodItem = {
      name: 'DazedAndConfused',
      category_id: 5,
      carbonOutput: 19.76,
      waterUsage: 420,
      id: expected
    }

    return request(server)
      .post('/api/v1/foods/')
      .send(newFoodItem)
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
        expect(res.body[expected - 1].name).toBe(newFoodItem.name)
      })
  }

    // .then(() => {
    //   return request(server)
    //     .get('/api/v1/foods/')
    //     .then(res => {
    //       const count = res.body.length
    //       expect(count).toBe(expected)
    //     })})
  )
})
