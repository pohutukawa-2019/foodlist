import {
  getFoodDetailsError,
  getFoodDetailsPending,
  getFoodDetailsSuccess,
  fetchFoodDetails,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  ERROR
} from './foodDetails'

jest.mock('superagent')

describe('foodDetails action tests', () => {
  it(`getFoodDetailsPending returns ${GET_FOOD_DETAILS_PENDING}`, () => {
    const action = getFoodDetailsPending()

    expect(action.type).toBe(GET_FOOD_DETAILS_PENDING)
  })

  it(`getFoodDetailsSuccess returns ${GET_FOOD_DETAILS_SUCCESS}`, () => {
    const foodDetails = { id: 1, name: 'Fish', category_id: 4 }
    const action = getFoodDetailsSuccess(foodDetails)

    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
    expect(action.foodDetails).toBe(foodDetails)
  })

  it(`getFoodDetailsError returns ${ERROR}`, () => {
    const errorMessage = 'Something went wrong'
    const action = getFoodDetailsError(errorMessage)

    expect(action.type).toBe(ERROR)
    expect(action.message).toBe(errorMessage)
  })

  it.skip(`fetchFoodDetails dispatches ${GET_FOOD_DETAILS_PENDING}`, () => {

  })

  it.skip('fetchFoodDetails hits getFood/:id api', () => {

  })

  it.skip(`fetchFoodDetails dispatches ${GET_FOOD_DETAILS_SUCCESS} on api success`, () => {

  })

  it.skip(`fetchFoodDetails dispatches ${ERROR} on api fail`, () => {

  })
})
