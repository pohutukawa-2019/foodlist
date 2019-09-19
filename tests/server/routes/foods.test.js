require('babel-polyfill')
const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/db') // the mock

jest.mock('../../../server/db/db')

beforeEach(() => {
  db.reset()
})

test('GET /api/v1/foods/category/:categoryName returns a list of foods by category', done => {
  request(server)
    .get('/api/v1/foods/category/Fruits')
    .end((err, res) => {
      expect(err).toBeNull()
      const count = res.body.length
      expect(count).toBe(6)
      done()
    })
})
