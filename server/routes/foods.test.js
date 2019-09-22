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
