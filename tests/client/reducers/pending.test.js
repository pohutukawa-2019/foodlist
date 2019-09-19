import pending from '../../../client/reducers/pending'

describe('pending', () => {
  it('returns default state when no case matches', () => {
    const initialState = false
    const action = {
      type: 'DOES_NOT_EXIST'
    }
    const newState = pending(initialState, action)
    expect(newState).toBe(false)
  })
  it('returns true with GET_FOOD_PENDING case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_PENDING'
    }
    const newState = pending(initialState, action)
    expect(newState).toBe(true)
  })
  it('returns true with GET_FOOD_DETAILS_PENDING case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_DETAILS_PENDING'
    }
    const newState = pending(initialState, action)
    expect(newState).toBe(true)
  })
  it('returns false with GET_FOOD_SUCCESS case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_SUCCESS'
    }
    const newState = pending(initialState, action)
    expect(newState).toBe(false)
  })
  it('returns false with GET_FOOD_DETAIS_SUCCESS case match', () => {
    const initialState = false
    const action = {
      type: 'GET_FOOD_DETAILS_SUCCESS'
    }
    const newState = pending(initialState, action)
    expect(newState).toBe(false)
  })
})
