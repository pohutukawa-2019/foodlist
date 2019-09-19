import {
  getCategoryPending,
  getCategorySuccess,
  getCategoryError,
  getCategory
} from '../../../client/actions/foods'

test('getCategoryPending is hit with \'GET_CATEGORY_PENDING\'', () => {
  const action = getCategoryPending()
  expect(action.type).toBe('GET_CATEGORY_PENDING')
})

test('getCategorySucces is hit with \'GET_CATEGORY_SUCCESS\' and returns the category', () => {
  const category = [
    {
      id: 1,
      name: 'Lamb'
    },
    {
      id: 2,
      name: 'Beef'
    }
  ]
  const action = getCategorySuccess(category)
  expect(action.type).toBe('GET_CATEGORY_SUCCESS')
  expect(action.category[0].id).toBe(1)
  expect(action.category[1].name).toBe('Beef')
  expect(action.category).toStrictEqual(category)
})

test('getCategoryError is hit with \'ERROR\' and returns the error message', () => {
  const error = {
    message: 'this is an error'
  }
  const action = getCategoryError(error.message)
  expect(action.type).toBe('ERROR')
  expect(action.message).toBe('this is an error')
})

// describe('getCategory', () => {
// it('dispatches getCategoryPending', () => {
//   const action =
// })

// it('makes a request to a route determined by the category received as an argument, then dispatches getCategorySuccessed with the response from that route')

// it('dispatches getCategoryError with the error when the response from the route is an error')
// })

// call mock getCategoryMock
