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

  it.skip('fetchCategories returns an error when expected', () => {
    // TODO: Figure out how to create an error condition
    // on a function that doesn't have any args
    expect.assertions(1) // otherwise a different id would create a false positive
    return fetchCategories().catch(e => {
      expect(e.message).toBe('Error accessing categories api.')
    })
  })
})
