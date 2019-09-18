import pending from '../../../client/reducers/pending'

test('pending reducer should return false as the default action', () => {
  const initialState = false
  const action = {
    type: 'DOES_NOT_EXIST'
  }
  const newState = pending(initialState, action)
  expect(newState).toBe(false)
})

test('pending reducer with action type GET_FOOD_PENDING returns true', () => {
  const initialState = false
  const action = {
    type: 'GET_FOOD_PENDING'
  }
  const newState = pending(initialState, action)
  expect(newState).toBe(true)
})

test('pending reducer with action type GET_FOOD_SUCCESS returns false', () => {
  const initialState = false
  const action = {
    type: 'GET_FOOD_SUCCESS'
  }
  const newState = pending(initialState, action)
  expect(newState).toBe(false)
})

test('pending reducer with action type GET_FOOD_DETAILS_PENDING returns true', () => {
  const initialState = false
  const action = {
    type: 'GET_FOOD_DETAILS_PENDING'
  }
  const newState = pending(initialState, action)
  expect(newState).toBe(true)
})

test('pending reducer with action type GET_FOOD_DETAILS_SUCCESS returns false', () => {
  const initialState = false
  const action = {
    type: 'GET_FOOD_DETAILS_SUCCESS'
  }
  const newState = pending(initialState, action)
  expect(newState).toBe(false)
})
