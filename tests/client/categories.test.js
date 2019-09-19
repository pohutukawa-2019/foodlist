import { getCategoriesPending, getCategoriesSuccess, getCategoriesError } from '../../client/actions/categories' 

test('good to go', () => {
  expect(true).toBeTruthy()
}) 

test('getCategoriesPending returns get GET_CATEGORIES_PENDING' , () => {
const action = getCategoriesPending('testcategories')

expect(action.type).toBe('GET_CATEGORIES_PENDING') 
}) 

test('getCategoriesSuccess returns get GET_CATEGORIES_SUCCESS' , () => {
  const action = getCategoriesSuccess('testcategories')
  
  expect(action.type).toBe('GET_CATEGORIES_SUCCESS') 
  expect(action.categories).toBe('testcategories')
  })

  test('getCategoriesError returns get GET_CATEGORIES_ERROR' , () => {
    const action = getCategoriesError('testcategories')
    
    expect(action.type).toBe('ERROR') 
    expect(action.message).toBe('testcategories')
    })