import {
  getCategoryPending,
  getCategorySuccess,
  getCategoryError,
  getCategory
} from '../../../client/actions/foods'
import {
  foods
} from '../../../client/api/foods'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

require('babel-polyfill')

const mockStore = configureMockStore([thunk])
jest.mock('../../../client/api/foods')

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

describe('getCategory', () => {
  it('makes a request to a route determined by the category received, then dispatches getCategorySuccess with the response from that route', async () => {
    const store = mockStore()
    await store.dispatch(getCategory('meat'))
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({ type: 'GET_CATEGORY_PENDING' })
    expect(actions[1]).toEqual({
      type: 'GET_CATEGORY_SUCCESS',
      category: foods
    })
  })
  it('returns the error message when an error is hit', async () => {
    const store = mockStore()
    await store.dispatch(getCategory('err'))
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({ type: 'GET_CATEGORY_PENDING' })
    expect(actions[1]).toEqual({ type: 'ERROR', message: 'Category does not exist' })
  })
})
