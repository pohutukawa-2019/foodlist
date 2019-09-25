import {
  addFoodPending,
  addFoodSuccess,
  addNewFood,
  ADD_FOOD_PENDING,
  ADD_FOOD_SUCCESS
} from './foods'
import { ERROR } from './error'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const lastPathEntry = endpoint.split('/').pop()

    if (lastPathEntry === 'foods') {
      return Promise.resolve({
        id: 1
      })
    } else {
      return Promise.reject(new Error('failed too connect'))
    }
  }
})

describe('Add Food actions', () => {
  it('addFoodPending is hit with \'ADD_FOOD_PENDING\'', () => {
    const action = addFoodPending()
    expect(action.type).toBe(ADD_FOOD_PENDING)
  })

  it('addFoodSuccess is hit with \'ADD_FOOD_SUCCESS\'', () => {
    const action = addFoodSuccess()
    expect(action.type).toBe(ADD_FOOD_SUCCESS)
  })
})

describe('addNewFood', () => {
  it('addNewFod dispatches the correct actions', () => {
    const dispatch = jest.fn()
    const food = {
      name: 'Turkey',
      category: 'Meat',
      carbonOutput: 5.83,
      waterUsage: 5291
    }

    return addNewFood(food)(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[0][0].type).toBe(ADD_FOOD_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(ADD_FOOD_SUCCESS)
      })
  })
})
