const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getFoods returns an array of 27 foods', () => {
  expect.assertions(1)

  const expected = 27

  return db.getFoods(testDb)
    .then(foods => {
      const actual = foods.length
      expect(actual).toBe(expected)
    })
})

test('db.getFoodsByCategory returns an array of foods by category', () => {
  expect.assertions(1)

  const expected = 6

  return db.getFoodsByCategory('Fruits', testDb)
    .then(foods => {
      const actual = foods.length
      expect(actual).toBe(expected)
    })
})
