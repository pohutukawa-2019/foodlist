import fetchFoods from './fetchFoods'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: [
        {
          id: 1,
          name: 'Lamb',
          category_id: 5,
          carbonOutput: 20.85,
          waterUsage: 8763
        }, {
          id: 2,
          name: 'Beef',
          category_id: 5,
          carbonOutput: 13.78,
          waterUsage: 15000
        }
      ]
    })
  }
})

describe('API client for categories', () => {
  it('fetchFoods returns food categories', () => {
    return fetchFoods()
      .then(foods => {
        expect(foods).toHaveLength(2)
      })
  })

  it('fetchFoodsById returns an error when expected', () => {
    return fetchFoods(33).catch(e => {
      expect(e.message).toBe('Error accessing foods api.')
    })
  })
})
