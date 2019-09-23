const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('db.getCategories', () => {
  it('returns and array of categories', () => {
    expect.assertions(1)

    const expected = 6

    return db.getCategories(testDb)
      .then(categories => {
        const actual = categories.length
        expect(actual).toBe(expected)
      })
  })
})
