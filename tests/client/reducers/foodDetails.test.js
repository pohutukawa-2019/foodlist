import foodDetails from '../../../client/reducers/foodDetails'

test('foodDetails reducer returns an empty object as the initial state', () => {
  const initialState = {}
  const action = {
    type: 'DOES_NOT_EXIST'
  }
  const newState = foodDetails(initialState, action)
  expect(newState).toStrictEqual({})
})

test('foodDetails reducer returns the food\'s details', () => {
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
