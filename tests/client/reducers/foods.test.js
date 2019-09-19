import foodsReducer from '../../../client/reducers/foods'

describe('foods reducer tests', () => {
  it('GET_FOOD_SUCCESS returns a list of foods', () => {
    const currentState = []
    const action = {
      type: 'GET_FOOD_SUCCESS',
      foods: [
        { id: 1, name: 'Lamb', category_id: 5, waterUsage: 8763, carbonOutput: 20.85 },
        { id: 2, name: 'Beef', category_id: 5, waterUsage: 15000, carbonOutput: 13.78 },
        { id: 13, name: 'Rice', category_id: 3, waterUsage: 3400, carbonOutput: 2.08 }
      ]
    }
    const newState = foodsReducer(currentState, action)
    expect(newState).toBe(action.foods)
  })

  it('GET_CATEGORY_SUCCESS returns a list of foods for a particular category', () => {
    const currentState = []
    const action = {
      type: 'GET_CATEGORY_SUCCESS',
      category: [
        { id: 1, name: 'Lamb', category_id: 5, waterUsage: 8763, carbonOutput: 20.85 },
        { id: 2, name: 'Beef', category_id: 5, waterUsage: 15000, carbonOutput: 13.78 }
      ]
    }
    const newState = foodsReducer(currentState, action)
    expect(newState).toBe(action.category)
  })
})
