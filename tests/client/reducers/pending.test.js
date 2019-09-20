import pendingReducer from '../../../client/reducers/pending'

describe('pending reducer category tests', () => {
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

describe('pending reducer category tests', () => {
  it('GET_CATEGORY_SUCCESS action returns false', () => {
    const testState = false
    const testAction = {
      type: 'GET_CATEGORY_SUCCESS'
    }

    const actual = pendingReducer(testState, testAction)

    expect(actual).toBe(false)
  })

  it('GET_CATEGORY_PENDING action returns true', () => {
    const testState = true
    const testAction = {
      type: 'GET_CATEGORY_PENDING'
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

describe('pending reducer get food', () => {
  it('returns false with GET_FOOD_SUCCESS case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_SUCCESS'
    }
    const newState = pendingReducer(initialState, action)
    expect(newState).toBe(false)
  })
  it('returns true with GET_FOOD_PENDING case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_PENDING'
    }
    const newState = pendingReducer(initialState, action)
    expect(newState).toBe(true)
  })
})

describe('pending reducer get food details', () => {
  it('returns true with GET_FOOD_DETAILS_PENDING case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_DETAILS_PENDING'
    }
    const newState = pendingReducer(initialState, action)
    expect(newState).toBe(true)
  })
  it('returns false with GET_FOOD_DETAILS_SUCCESS case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_DETAILS_SUCCESS'
    }
    const newState = pendingReducer(initialState, action)
    expect(newState).toBe(false)
  })
})
