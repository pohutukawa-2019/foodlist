import categoriesReducer from './categories'

describe('category reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action returns array', () => {
    const state = []

    const action = {
      type: 'GET_CATEGORIES_SUCCESS',
      categories: ['c1', 'c2', 'c3', 'c4', 'c5']
    }

    const actual = categoriesReducer(state, action)

    expect(actual.length).toBe(5)
    expect(actual[2]).toBe('c3')
  })

  it('NO_MATCH action returns state unchanged', () => {
    const state = false
    const action = { type: 'NO_MATCH' }

    const actual = categoriesReducer(state, action)

    expect(actual).toBe(state)
  })
})
