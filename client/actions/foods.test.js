import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import {
  getCategory,
  getCategoryPending,
  getCategorySuccess,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS
} from './foods'

import { ERROR } from './error'
import { foods } from '../test/data'

require('babel-polyfill')

const mockStore = configureMockStore([thunk])
jest.mock('../api/foods')

const categories = [
  {
    id: 1,
    name: 'Lamb'
  }, {
    id: 2,
    name: 'Beef'
  }
]

describe('Category actions', () => {
  it('getCategoryPending is hit with \'GET_CATEGORY_PENDING\'', () => {
    const action = getCategoryPending()
    expect(action.type).toBe(GET_CATEGORY_PENDING)
  })

  it('getCategorySucces is hit with \'GET_CATEGORY_SUCCESS\' and returns the category', () => {
    const action = getCategorySuccess(categories)
    expect(action.type).toBe(GET_CATEGORY_SUCCESS)
    expect(action.category[0].id).toBe(1)
    expect(action.category[1].name).toBe('Beef')
    expect(action.category).toStrictEqual(categories)
  })

  describe('getCategory', () => {
    it('makes a request to a route determined by the category received, then dispatches getCategorySuccess with the response from that route', async () => {
      const store = mockStore()
      await store.dispatch(getCategory('meat'))
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({ type: GET_CATEGORY_PENDING })
      expect(actions[1]).toEqual({
        type: GET_CATEGORY_SUCCESS,
        category: categories
      })
    })

    it('returns the error message when an error is hit', async () => {
      const store = mockStore()
      await store.dispatch(getCategory('err'))
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({ type: GET_CATEGORY_PENDING })
      expect(actions[1]).toEqual({ type: ERROR, message: 'Category does not exist' })
    })
  })
})
