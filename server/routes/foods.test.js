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
      .get('/api/v1/categories')
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
      name: 'Pizza',
      category_id: 5,
      carbonOutput: 19.76,
      waterUsage: 420,
      id: expected
    }

    return request(server)
      .post('/api/v1/foods')
      .send(newFoodItem)
      .then(res => {
        const id = res.body
        expect(id).toBe(expected)
      })
  })

  it('DEL / deletes a food', () => {
    const expected = 6

    return request(server)
      .delete('/api/v1/foods/2')
      .then(res => {
        const count = res.body.length
        expect(count).toBe(expected)
      })
  })
})
