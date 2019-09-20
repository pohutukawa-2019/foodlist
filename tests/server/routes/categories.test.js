require('babel-polyfill')

const server = require('../../../server/server')
const db = require('../../../server/db/db')

jest.mock('../../../server/db/db')

beforeEach(() => {
  db.reset()
})

test('GET / returns a list of catagories', () => {
  jest.unmock('superagent')
  const request = require('supertest')

  const expected = 6

  return request(server)
    .get('/api/v1/categories')
    .then(res => {
      const count = res.body.length
      expect(count).toBe(expected)
    })
})
