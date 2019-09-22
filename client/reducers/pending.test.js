import pendingReducer from './pending'

describe('pending reducer category tests', () => {
  it('GET_CATEGORIES_SUCCESS action returns false', () => {
    const state = false
    const action = {
      type: 'GET_CATEGORIES_SUCCESS'
    }

    const actual = pendingReducer(state, action)

    expect(actual).toBe(false)
  })

  it('GET_CATEGORIES_PENDING action returns true', () => {
    const state = true
    const action = {
      type: 'GET_CATEGORIES_PENDING'
    }

    const actual = pendingReducer(state, action)

    expect(actual).toBe(true)
  })

  it('NO_MATCH action returns state unchanged', () => {
    const state = false
    const action = {
      type: 'NO_MATCH'
    }

    const actual = pendingReducer(state, action)

    expect(actual).toBe(state)
  })
})

describe('pending reducer get food', () => {
  it('returns false with GET_FOOD_SUCCESS case match', () => {
    const state = false
    const action = {
      type: 'GET_FOOD_SUCCESS'
    }
    const newState = pendingReducer(state, action)
    expect(newState).toBe(false)
  })

  it('returns true with GET_FOOD_PENDING case match', () => {
    const state = false
    const action = {
      type: 'GET_FOOD_PENDING'
    }
    const newState = pendingReducer(state, action)
    expect(newState).toBe(true)
  })
})

describe('pending reducer get food details', () => {
  it('returns true with GET_FOOD_DETAILS_PENDING case match', () => {
    const state = false
    const action = {
      type: 'GET_FOOD_DETAILS_PENDING'
    }
    const newState = pendingReducer(state, action)
    expect(newState).toBe(true)
  })

  it('returns false with GET_FOOD_DETAILS_SUCCESS case match', () => {
    const state = false
    const action = {
      type: 'GET_FOOD_DETAILS_SUCCESS'
    }
    const newState = pendingReducer(state, action)
    expect(newState).toBe(false)
  })
})
