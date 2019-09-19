require('babel-polyfill')
const request = require('supertest')

const db = require('../../../server/db/db')

jest.mock('../../../server/db/db')

beforeEach(() => {
  db.reset()
})

const server = require('../../../server/server')

test('GET :ID / returns a specific food item based on its ID', () => {
  return request(server)
    .get('/api/v1/foods/1')
    .then(res => {
      console.log(res.body.name)
      expect(res.body.name).toBe('Lamb')
    })
})
