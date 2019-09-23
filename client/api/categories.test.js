import { fetchCategories } from './categories'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: [
        { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' }
      ]
    })
  }
})

describe('API client for categories', () => {
  it('fetchCategories returns food categories', () => {
    return fetchCategories()
      .then(categories => {
        expect(categories).toHaveLength(2)
      })
  })

  it('fetchCategories returns an error when expected', () => {
    return fetchCategories(33).catch(e => {
      expect(e.message).toBe('Error accessing categories api.')
    })
  })
})
