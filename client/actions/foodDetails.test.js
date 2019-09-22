import {
  getFoodDetails,
  getFoodDetailsPending,
  getFoodDetailsSuccess,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS
} from './foodDetails'

describe('foodDetails action tests', () => {
  it(`getFoodDetailsPending returns ${GET_FOOD_DETAILS_PENDING}`, () => {
    const action = getFoodDetailsPending()

    expect(action.type).toBe(GET_FOOD_DETAILS_PENDING)
  })

  it('getFoodDetailsSuccess returns GET_FOOD_DETAILS_SUCCESS', () => {
    const foodDetails = { id: 1, name: 'Fish', category_id: 4 }
    const action = getFoodDetailsSuccess(foodDetails)

    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
    expect(action.foodDetails).toBe(foodDetails)
  })

  it.skip('getFoodDetails dispatches GET_FOOD_DETAILS_PENDING', () => {

  })

  it.skip('getFoodDetails hits /getFood/:id api', () => {

  })

  it.skip('getFoodDetails dispatches GET_FOOD_DETAILS_SUCCESS on api success', () => {

  })

  it.skip('getFoodDetails dispatches ERROR on api fail', () => {

  })
})
