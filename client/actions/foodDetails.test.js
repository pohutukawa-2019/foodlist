import {
  getFoodDetails,
  getFoodDetailsSuccess,
  getFoodDetailsPending,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS
} from './foodDetails'
import { ERROR } from './error'

jest.mock('../api/requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    const id = Number(endpoint.split('/').pop())
    // so we can test failure conditions
    if (id === 33) {
      return Promise.reject(new Error('id not found'))
    } else {
      return Promise.resolve({
        id: id
      })
    }
  }
})

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
      carbonOutput: 5.83,
      waterUsage: 5291
    }
    const action = getFoodDetailsSuccess(foodDetails)

    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
    expect(action.foodDetails).toBe(foodDetails)
  })

  it('getFoodDetails dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const foodId = 3

    return getFoodDetails(foodId)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(GET_FOOD_DETAILS_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_FOOD_DETAILS_SUCCESS)
      })
  })

  it('getFoodDetails dispatches an error when applicable', () => {
    const dispatch = jest.fn()
    const foodId = 33

    return getFoodDetails(foodId)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(GET_FOOD_DETAILS_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(ERROR)
      })
  })
})
