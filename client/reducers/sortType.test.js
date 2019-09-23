import sortType from './sortType'
import {
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING
} from '../actions/sort'

describe('sortType reducer', () => {
  it('returns an empty string as the initial state', () => {
    const state = ''
    const action = { type: 'DOES_NOT_EXIST' }

    const newState = sortType(state, action)

    expect(newState).toBe('')
  })

  it('returns the correct sortType when passed a SORT_ALPHABETICAL_ASCENDING action', () => {
    const currentState = ''
    const action = {
      type: SORT_ALPHABETICAL_ASCENDING
    }

    const newState = sortType(currentState, action)
    expect(newState).toBe(SORT_ALPHABETICAL_ASCENDING)
  })

  it('returns the correct sortType when passed a SORT_ALPHABETICAL_DESCENDING action', () => {
    const currentState = ''
    const action = {
      type: SORT_ALPHABETICAL_DESCENDING
    }

    const newState = sortType(currentState, action)
    expect(newState).toBe(SORT_ALPHABETICAL_DESCENDING)
  })
})
