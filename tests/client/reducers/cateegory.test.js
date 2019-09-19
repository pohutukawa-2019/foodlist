import categoryReducer from '../../../client/reducers/categories'

test('get category success reducer returns array of categories', () => {
  const testStateArr = {
    categories: []
  }

  const testAction = {
    type: 'GET_CATEGORIES_SUCCESS',
    categories: ['c1', 'c2', 'c3', 'c4', 'c5']
  }

  const actual = categoryReducer(testStateArr, testAction)

  expect(actual.categories.length).toBe(5)
  expect(actual.categories[2]).toBe('c3')
})
