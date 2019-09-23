import { getFoodById } from './foods'

jest.mock('./requestor', () => {
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

describe('API client for food', () => {
  it('getFoodsById returns correct food', () => {
    return getFoodById(3)
      .then(food => {
        expect(food.id).toBe(3)
      })
  })

  it('getFoodsById returns an error when expected', () => {
    expect.assertions(1) // otherwise a valid id would still pass
    return getFoodById(33).catch(e => {
      expect(e.message).toBe('Error accessing foods api.')
    })
  })
})

describe('getFoodsByCategory', () => {
  it('returns the foods within a given category name', () => {
    return getFoodsByCategory('meat')
      .then(category => {
        expect(category[0].id).toBe(1)
        expect(category[1].name).toBe('Beef')
      })
  })
  it('returns an error message when a category does not exist', () => {
    return getFoodsByCategory('does-not-exist')
      .catch(error => {
        expect(error.message).toBe('Error accessing food category api')
      })
  })
})