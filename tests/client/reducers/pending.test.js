import pendingReducer from '../../../client/reducers/pending'

describe('pending reducer tests', () => {
  it('GET_CATEGORIES_SUCCESS action returns false', () => {
    const testState = false
    const testAction = {
      type: 'GET_CATEGORIES_SUCCESS'
    }

    const actual = pendingReducer(testState, testAction)

    expect(actual).toBe(false)
  })

  it('GET_CATEGORIES_PENDING action returns true', () => {
    const testState = true
    const testAction = {
      type: 'GET_CATEGORIES_PENDING'
    }

    const actual = pendingReducer(testState, testAction)

    expect(actual).toBe(true)
  })

  it('NO_MATCH action returns state unchanged', () => {
    const testState = false
    const testAction = {
      type: 'NO_MATCH'
    }

    const actual = pendingReducer(testState, testAction)

    expect(actual).toBe(testState)
  })
})
