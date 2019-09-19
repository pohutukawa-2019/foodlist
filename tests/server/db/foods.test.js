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

test('db.getFoodById returns a single object', () => {
  
  const id = 1

  const foodItem = {
    id: 1,
    name: 'Lamb',
    category: 'Meat',
    carbon_value: 20.85,
    water_usage: 8763
  }

  return db.getFoodById(id, testDb)
    .then(foods => {
      expect(foods.name).toBe(foodItem.name)
    })
})
