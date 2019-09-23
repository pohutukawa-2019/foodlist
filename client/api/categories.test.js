const categories = require('./categories')

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    const categories = (endpoint.split('/').pop())
    // so we can test failure conditions
    if (categories === 'fruits') {
      return Promise.reject(new Error('category not found'))
    } else {
      return Promise.resolve({
        categories: categories
      })
    }
  }
})

describe('API client for categories', () => {
  it('getCategoriesAPI returns food category', () => {
    return categories.getCategoriesAPI('fruits')
      .then(category => {
        expect(category).toBe('fruits')
      })
  })

  it('getCategories returns an error when expected', () => {
    expect.assertions(1) // otherwise a valid category would still pass
    return categories.getCategoriesAPI('fruits').catch(e => {
      expect(e.message).toBe('Error accessing categories api.')
    })
  })
})
