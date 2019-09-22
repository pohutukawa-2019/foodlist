import {
  getFoodDetailsError,
  getFoodDetailsSuccess,
  getFoodDetailsPending,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  ERROR
} from './foodDetails'

describe('foodDetails action tests', () => {
  it('getFoodDetailsPending returns a GET_FOOD_DETAILS_PENDING action', () => {
    const action = getFoodDetailsPending()
    expect(action.type).toBe(GET_FOOD_DETAILS_PENDING)
  })

  it('getFoodDetailsSuccess returns a GET_FOOD_DETAILS_SUCCESS action', () => {
    const foodDetails = {
      id: 3,
      name: 'Turkey',
      category: 'Meat',
      carbonValue: 5.83,
      waterUsage: 5291
    }
    const action = getFoodDetailsSuccess(foodDetails)

    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
    expect(action.foodDetails).toBe(foodDetails)
  })

  it('getFoodDetailsError returns a ERROR action', () => {
    const message = 'error message'
    const action = getFoodDetailsError(message)

    expect(action.type).toBe(ERROR)
    expect(action.message).toBe(message)
  })
})
