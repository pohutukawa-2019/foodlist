import { fetchFoodById, fetchFoods } from './foods'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    const id = Number(endpoint.split('/').pop())
    // so we can test failure conditions
    if (id === 33) {
      return Promise.reject(new Error('id not found'))
    } else {
      return Promise.resolve({
        body: [
          {
            id: 1,
            name: 'Lamb',
            category_id: 5,
            carbonOutput: 20.85,
            waterUsage: 8763
          },
          {
            id: 2,
            name: 'Beef',
            category_id: 5,
            carbonOutput: 13.78,
            waterUsage: 15000
          },
          {
            id: 3,
            name: 'Turkey',
            category_id: 5,
            carbonOutput: 5.83,
            waterUsage: 5291
          }
        ]
      })
    }
  }
})

describe('API client for food', () => {
  it('fetchFoodsById returns correct food', () => {
    return fetchFoodById(3)
      .then(food => {
        expect(food.id).toBe(3)
      })
  })

  it('fetchFoodsById returns an error when expected', () => {
    expect.assertions(1) // otherwise a valid id would still pass
    return fetchFoodById(33).catch(e => {
      expect(e.message).toBe('Error accessing foods api.')
    })
  })
})

describe('API client for all foods', () => {
  it('fetchFoods returns all foods', () => {
    return fetchFoods()
      .then(foods => {
        expect(foods).toHaveLength(3)
      })
  })

  it('fetchFoods returns an error when expected', () => {
    // expect.assertions(1) // otherwise a valid id would still pass
    return fetchFoods().catch(e => {
      expect(e.message).toBe('Error accessing foods api.')
    })
  })
})
