import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import {
  getFoodsByCategory,
  getCategoryPending,
  getCategorySuccess,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS
} from './foods'

import { ERROR } from './error'

require('babel-polyfill')

const mockStore = configureMockStore([thunk])

const foods = [
  {
    id: 1,
    name: 'Lamb'
  }, {
    id: 2,
    name: 'Beef'
  }
]

jest.mock('../api/requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    const category = endpoint.split('/').pop()
    // so we can test failure conditions
    if (category === 'meat') {
      return Promise.resolve({
        body: [
          {
            id: 1,
            name: 'Lamb'
          }, {
            id: 2,
            name: 'Beef'
          }
        ]
      })
    } else {
      return Promise.reject(new Error('Category not found'))
    }
  }
})

describe('Category actions', () => {
  it('getCategoryPending is hit with \'GET_CATEGORY_PENDING\'', () => {
    const action = getCategoryPending()
    expect(action.type).toBe(GET_CATEGORY_PENDING)
  })

  it('getCategorySucces is hit with \'GET_CATEGORY_SUCCESS\' and returns the category', () => {
    const action = getCategorySuccess(foods)
    expect(action.type).toBe(GET_CATEGORY_SUCCESS)
    expect(action.category[0].id).toBe(1)
    expect(action.category[1].name).toBe('Beef')
    expect(action.category).toStrictEqual(foods)
  })

  describe('getCategory', () => {
    it('makes a request to a route determined by the category received, then dispatches getCategorySuccess with the response from that route', async () => {
      const store = mockStore()
      await store.dispatch(getFoodsByCategory('meat'))
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({ type: GET_CATEGORY_PENDING })
      expect(actions[1]).toEqual({
        type: GET_CATEGORY_SUCCESS,
        category: foods
      })
    })

    it('returns the error message when an error is hit', async () => {
      const store = mockStore()
      await store.dispatch(getFoodsByCategory('err'))
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({ type: GET_CATEGORY_PENDING })
      expect(actions[1]).toEqual({ type: ERROR, message: 'Error accessing foods api' })
    })
  })
})
