import categoryReducer from '../../../client/reducers/categories'

describe('category reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action returns array', () => {
    const testStateArr = {
      categories: []
    }

    const testAction = {
      type: 'GET_CATEGORIES_SUCCESS',
      categories: ['c1', 'c2', 'c3', 'c4', 'c5']
    }

    const actual = categoryReducer(testStateArr, testAction)

    expect(actual.categories.length).toBe(5)
    expect(actual.categories[2]).toBe('c3')
  })

  it('NO_MATCH action returns state unchanged', () => {
    const testState = false
    const testAction = {
      type: 'NO_MATCH'
    }
    const actual = categoryReducer(testState, testAction)

    expect(actual).toBe(testState)
  })
})
