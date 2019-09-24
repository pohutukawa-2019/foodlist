import addedFoodReducer from './addedFood'
import { ADD_FOOD_SUCCESS, GET_FOOD_PENDING } from '../actions/foods'

describe('addedFood reducer tests', () => {
  it('ADD_FOOD_SUCCESS action returns true', () => {
    const state = false
    const action = {
      type: ADD_FOOD_SUCCESS
    }

    const actual = addedFoodReducer(state, action)

    expect(actual).toBe(true)
  })

  it('GET_FOOD_PENDING action returns false', () => {
    const state = false
    const action = {
      type: GET_FOOD_PENDING
    }

    const actual = addedFoodReducer(state, action)

    expect(actual).toBe(false)
  })

  it('NO_MATCH action returns state unchanged', () => {
    const state = false
    const action = {
      type: 'NO_MATCH'
    }

    const actual = addedFoodReducer(state, action)

    expect(actual).toBe(state)
  })
})
