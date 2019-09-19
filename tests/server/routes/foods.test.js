require('babel-polyfill')

const server = require('../../../server/server')
const db = require('../../../server/db/db') // the mock

jest.mock('../../../server/db/db')

beforeEach(() => {
  db.reset()
})

test('GET /api/v1/foods/category/:categoryName returns a list of foods by category', () => {
  jest.unmock('superagent')
  const request = require('supertest')

  return request(server)
    .get('/api/v1/foods/category/Fruits')
    .then(res => {
      const count = res.body.length
      expect(count).toBe(6)
    })
})

test('GET /:id returns a specific food item based on its ID', () => {
  jest.unmock('superagent')
  const request = require('supertest')

  return request(server)
    .get('/api/v1/foods/3')
    .then(res => {
      expect(res.body.name).toBe('Apples')
    })
})
