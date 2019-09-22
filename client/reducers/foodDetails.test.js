import foodDetails from './foodDetails'

describe('foodDetails reducer', () => {
  it('returns an empty object as the initial state', () => {
    const state = {}
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = foodDetails(state, action)

    expect(newState).toBe(state)
  })

  it("returns the food's details", () => {
    const currentState = {}
    const action = {
      type: 'GET_FOOD_DETAILS_SUCCESS',
      foodDetails: {
        details: 'hit the test'
      }
    }
    const newState = foodDetails(currentState, action)
    expect(newState.details).toBe('hit the test')
  })
})
