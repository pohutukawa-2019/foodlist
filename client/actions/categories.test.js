import {
  getCategoriesPending,
  getCategoriesSuccess
} from './categories'

describe('category actions', () => {
  it('getCategoriesPending returns get GET_CATEGORIES_PENDING', () => {
    const action = getCategoriesPending('testcategories')
    expect(action.type).toBe('GET_CATEGORIES_PENDING')
  })

  it('getCategoriesSuccess returns get GET_CATEGORIES_SUCCESS', () => {
    const action = getCategoriesSuccess('testcategories')
    expect(action.type).toBe('GET_CATEGORIES_SUCCESS')
    expect(action.categories).toBe('testcategories')
  })
})
