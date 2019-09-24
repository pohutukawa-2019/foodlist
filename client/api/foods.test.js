import { fetchFoodById, fetchFoodsByCategory } from './foods'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    const id = Number(endpoint.split('/').pop())
    // so we can test failure conditions
    if (id === 33) {
      return Promise.reject(new Error('id not found'))
    } else {
      return Promise.resolve({
        body: {
          id: id
        }
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

describe('fetchFoodsByCategory', () => {
  it.skip('returns the foods within a given category name', () => {
    // TODO: Move this into a separate test file
    // so it can use a different requestor mock
    return fetchFoodsByCategory('meat')
      .then(foods => {
        expect(foods[0].id).toBe(1)
        expect(foods[1].name).toBe('Beef')
      })
  })

  it('returns an error message when a category does not exist', () => {
    return fetchFoodsByCategory('does-not-exist')
      .catch(error => {
        expect(error.message).toBe('Error accessing food category api')
      })
  })
})
