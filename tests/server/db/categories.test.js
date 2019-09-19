const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('db.getCategories tests', () => {
  it('returns and array of 6 categories', () => {
    expect.assertions(1)

    const expected = 6

    return db.getCategories(testDb)
      .then(categories => {
        const actual = categories.length
        expect(actual).toBe(expected)
      })
  })
})
