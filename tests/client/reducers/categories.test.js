import categoriesReducer from '../../../client/reducers/categories'

describe('category reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action returns array', () => {
    const testStateArr = []

    const testAction = {
      type: 'GET_CATEGORIES_SUCCESS',
      categories: ['c1', 'c2', 'c3', 'c4', 'c5']
    }

    const actual = categoriesReducer(testStateArr, testAction)

    expect(actual.length).toBe(5)
    expect(actual[2]).toBe('c3')
  })

  it('NO_MATCH action returns state unchanged', () => {
    const testState = false
    const testAction = {
      type: 'NO_MATCH'
    }
    const actual = categoriesReducer(testState, testAction)

    expect(actual).toBe(testState)
  })
})
